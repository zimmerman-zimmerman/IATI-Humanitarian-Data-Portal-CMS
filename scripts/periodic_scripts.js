process.env.NODE_ENV = 'production';

require('../config/env');

const axios = require('axios');
const moment = require('moment');
const fetch = require('isomorphic-fetch');
const { API, cond, and } = require('space-api');

const find = require('lodash/find');
const sortBy = require('lodash/sortBy');
const filter = require('lodash/filter');
const findIndex = require('lodash/findIndex');

const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

function updateSignatories(db) {
  console.log(`[${new Date().toString()}] checking signatory updates`);
  db.get('signatories')
    .apply()
    .then(resp => {
      const signatories = resp.data.result;
      signatories.forEach(signatory => {
        if (signatory.IATIOrgRef && signatory.IATIOrgRef.length > 0) {
          // console.log('signatory', signatory);
          // so here we get the current signatories first dataset published date
          // and its current regPubId(publisher_name)
          // and we update the cms signatories
          axios
            .get(`${process.env.REACT_APP_DS_API}/search/dataset/`, {
              params: {
                q: `publisher_iati_id:${signatory.IATIOrgRef}`,
                fl: 'publisher_name,date_created',
                sort: 'date_created asc',
                rows: '1',
              },
            })
            .then(res => {
              if (
                res.data &&
                res.data.response &&
                res.data.response.docs &&
                res.data.response.docs[0]
              ) {
                const iatiItem = res.data.response.docs[0];

                db.updateOne('signatories')
                  .where(cond('_id', '==', signatory._id))
                  .set({
                    firstPubDate: iatiItem.date_created.substring(0, 10),
                    regPubId: iatiItem.publisher_name,
                  })
                  .apply()
                  .then(() => {
                    console.log(
                      `[${new Date()}] - signatory date and name successfully updated`
                    );
                  });
              }
            });

          // here we get the current signatory organisations organisation name
          // and again update the signatory
          axios
            .get(`${process.env.REACT_APP_DS_API}/search/activity/`, {
              params: {
                q: `reporting_org_ref:${signatory.IATIOrgRef}`,
                fl: 'reporting_org_type_name',
                rows: '1',
              },
            })
            .then(res => {
              if (
                res.data &&
                res.data.response &&
                res.data.response.docs &&
                res.data.response.docs[0]
              ) {
                const iatiItem = res.data.response.docs[0];

                db.updateOne('signatories')
                  .where(cond('_id', '==', signatory._id))
                  .set({
                    orgType: iatiItem.reporting_org_type_name,
                  })
                  .apply()
                  .then(() => {
                    console.log(
                      `[${new Date()}] - signatory type successfully updated`
                    );
                  });
              }
            });
        }
      });
    });
}

const updateFrequency = async db => {
  console.log(`[${new Date().toString()}] checking frequency updates`);
  // so here we get all of the signatories in the cms
  // and loop through them
  const sigResp = await db.get('signatories').apply();
  const sigData = sigResp.data.result;

  for (let sigInd = 0; sigInd < sigData.length; sigInd++) {
    const signatory = sigData[sigInd];
    if (signatory.regPubId && signatory.regPubId.length > 0) {
      // then we request the json file containing the
      // signatories frequency data
      const urlz = `http://publishingstats.iatistandard.org/stats/gitaggregate-publisher-dated/${signatory.regPubId}/most_recent_transaction_date.json`;

      fetch(urlz)
        .then(response => response.json())
        .then(async jsonData => {
          let freqData = jsonData;

          // here we sort the date object by date keys
          freqData = Object.keys(freqData)
            .sort()
            .reduce((accumulator, currentValue) => {
              accumulator[currentValue] = freqData[currentValue];
              return accumulator;
            }, {});

          // let latestDate = ;
          // so here we get the latest item from our frequency data
          // for the current signatory
          let latestFrequency = await db
            .get('frequency')
            .where(cond('sig_ref', '==', signatory.IATIOrgRef))
            .sort('actual_date')
            .apply();

          let prevTransDate = moment('1000-01-01');
          freqData = Object.entries(freqData);

          if (latestFrequency.data.result.length > 0) {
            latestFrequency =
              latestFrequency.data.result[
                latestFrequency.data.result.length - 1
              ];
            prevTransDate = moment(
              latestFrequency.last_trans_date.substring(0, 10)
            );
            const currDateIndex = findIndex(
              freqData,
              item => item[0] === latestFrequency.actual_date
            );
            if (currDateIndex === -1) {
              console.log(
                `[${new Date()}] - date item not found, please recheck code and data`
              );
            } else {
              freqData = freqData.slice(currDateIndex);
            }
          }

          for (let i = 0; i < freqData.length; i++) {
            const freqItem = freqData[i];

            if (freqItem[0] && freqItem[1]) {
              // date when a transaction was updated
              const updDate = freqItem[0];
              // date of transaction stated in the
              // transaction element
              const transDate = moment(freqItem[1]);
              // here we check if a difference was spotted
              // between transaction dates
              if (transDate.isAfter(prevTransDate)) {
                // hooray! we found an update
                // for 'upDate' date
                prevTransDate = transDate;
                // now we need to cross check this with the datastore
                // to make sure that there's at least one
                // HUMANITARIAN activity with the found transaction date
                // for the current signatory organisation
                const humRes = await axios.get(
                  `${process.env.REACT_APP_DS_API}/search/activity/`,
                  {
                    params: {
                      q: `reporting_org_ref:${signatory.IATIOrgRef} AND
                        transaction_date_iso_date:[${
                          freqItem[1]
                        }T00:00:00Z TO ${freqItem[1]}T23:59:59Z]
                        AND (humanitarian:1 OR transaction_humanitarian:1 OR 
                        (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND 
                        (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR 
                        (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND 
                        (transaction_sector_code:[70000 TO 79999] OR
                         transaction_sector_code:[93010 TO 93018])))`,
                      rows: '0',
                    },
                  }
                );

                if (humRes.data.response.numFound > 0) {
                  // and hooray, its a humanitarian update
                  // so we can insert this update as a new item
                  // OR we can increase the update value if an item
                  // with the year and month already exists
                  // and the organisations ref
                  const monthDate = updDate.substring(0, 7);
                  const freqRes = await db
                    .getOne('frequency')
                    .where(
                      and(
                        cond('month_date', '==', monthDate),
                        cond('sig_ref', '==', signatory.IATIOrgRef)
                      )
                    )
                    .apply();

                  if (freqRes.status === 200) {
                    const frequency = freqRes.data.result;
                    // so if month frequency is found we increase
                    // the frequency value
                    await db
                      .updateOne('frequency')
                      .where(cond('_id', '==', frequency._id))
                      .set({
                        last_trans_date: transDate.format(),
                        actual_date: updDate,
                        updates_for_month: frequency.updates_for_month + 1,
                      })
                      .apply();
                    console.log(
                      `[${new Date().toString()}]increasing updates for signatory`,
                      signatory.IATIOrgRef
                    );
                    console.log('sig name', signatory.pubName);
                  } else {
                    // otherwise we add a new frequency item
                    console.log(
                      `[${new Date().toString()}]adding new month updates for signatory`,
                      signatory.IATIOrgRef
                    );
                    console.log('sig name', signatory.pubName);

                    await db
                      .insert('frequency')
                      .doc({
                        _id: generateId(),
                        sig_id: signatory._id,
                        sig_ref: signatory.IATIOrgRef,
                        sig_short_name: signatory.regPubId,
                        sig_long_name: signatory.pubName,
                        last_trans_date: transDate.format(),
                        actual_date: updDate,
                        month_date: monthDate,
                        updates_for_month: 1,
                      })
                      .apply();
                  }
                }
              }
            }
          }
        })
        .catch(error => {
          // handle your errors here
          console.log('error', error);
        });
    }
  }
};

function generateMonthArr(firstDate, lastDate) {
  const monthDates = [];
  let currDate = moment(`${firstDate.substring(0, 4)}-01-01`);
  const endDate = moment(`${lastDate.substring(0, 4)}-12-01`);

  while (!currDate.isSame(endDate)) {
    const monthDate = currDate.format().substring(0, 7);
    monthDates.push(monthDate);
    currDate = currDate.add(1, 'months');
  }

  monthDates.push(`${lastDate.substring(0, 4)}-12`);

  return monthDates;
}

function formatFrequency(frequencies) {
  const freqData = [];

  if (frequencies && frequencies.length > 0) {
    const monthDates = generateMonthArr(
      frequencies[0].month_date,
      frequencies[frequencies.length - 1].month_date
    );

    let currYear = '1000';
    let yearRow = [];

    monthDates.forEach(monthDate => {
      const year = monthDate.substring(0, 4);

      if (currYear !== year) {
        if (yearRow.length > 0) {
          freqData.push(yearRow);
        }

        currYear = year;
        yearRow = [year];
      }

      let freqValue = '00';
      const freqItem = find(frequencies, ['month_date', monthDate]);

      if (freqItem) {
        freqValue = freqItem.updates_for_month;
      }

      yearRow.push(freqValue);
    });

    freqData.push(yearRow);
  }
  return freqData.reverse();
}

function getYearMonths() {
  const yearMonths = [];
  // and we will also NOT want to include the current month for this
  let currDate = moment().subtract(1, 'months');

  for (let i = 0; i < 12; i += 1) {
    yearMonths.push({
      year: currDate.year(),
      month: currDate.month(),
    });
    currDate = currDate.subtract(1, 'months');
  }

  return yearMonths;
}

function getFrequencyRating(frequency, firstPubDate) {
  const yearMonths = getYearMonths();
  let freqRating = 'No Frequency Rating Found';

  if (!frequency || frequency.length === 0) {
    freqRating = 'No data';
  } else {
    // variable to store the publishing period for a
    // publisher based on today and the first dataset
    // they appear in
    const pubPeriod = moment().diff(firstPubDate, 'months');

    let freqCount = 0;
    let l2Months = false;
    let l4Months = false;
    let sixMonthly = 0;
    let pub6Quarterly = 0;

    for (let index = 0; index < yearMonths.length; index += 1) {
      const yearMonth = yearMonths[index];
      const yearRow = find(
        frequency,
        freqItem => freqItem[0] === yearMonth.year.toString()
      );

      // we add a one cause the first item in a year row contains the year
      // and we only want to check against months which are all of the remaining
      // elements in the year row
      if (yearRow && yearRow[yearMonth.month + 1] !== '00') {
        freqCount += 1;
      }

      // here we register if updates have been found
      // for the last two months it will be used in the lower
      // frequency rating calculations
      if (index === 1 && freqCount > 0) {
        l2Months = true;
      }

      // here we register if updates have been found
      // for the last four months it will be used in the lower
      // frequency rating calculations
      if (index === 3 && freqCount > 0) {
        l4Months = true;
      }

      // here we check the six-monthly value
      // where updates had to be reported in two 6 month periods
      if (index === 5 && freqCount > 0) {
        sixMonthly = freqCount;
      }
      if (index > 5 && freqCount > sixMonthly) {
        sixMonthly = true;
      }

      // here we check the quarterly value for the publisher of 6 months
      // where updates had to be reported in two quarters
      // so similar logic to above
      if (index === 2 && freqCount > 0) {
        pub6Quarterly = freqCount;
      }
      if (index > 2 && index < 6 && freqCount > pub6Quarterly) {
        pub6Quarterly = true;
      }

      switch (true) {
        case pubPeriod >= 12 && freqCount >= 7 && index === 11 && l2Months:
          freqRating = 'Monthly';
          break;
        case pubPeriod >= 12 && freqCount >= 3 && index === 11 && l4Months:
          freqRating = 'Quarterly';
          break;
        case pubPeriod >= 12 && sixMonthly === true && index === 11:
          freqRating = 'Six-monthly';
          break;
        case (pubPeriod >= 12 || (pubPeriod >= 6 && pubPeriod < 12)) &&
          freqCount > 0 &&
          index === 11:
          freqRating = 'Annual';
          break;
        case pubPeriod >= 12:
          freqRating = 'Less than annual';
          break;
        case pubPeriod >= 6 && pubPeriod < 12 && freqCount >= 4 && index === 5:
          freqRating = 'Monthly';
          break;
        case pubPeriod >= 6 &&
          pubPeriod < 12 &&
          pub6Quarterly === true &&
          index === 5:
          freqRating = 'Quarterly';
          break;
        case pubPeriod >= 3 && pubPeriod < 6 && freqCount === 3 && index === 2:
          freqRating = 'Monthly';
          break;
        case pubPeriod >= 3 && pubPeriod < 6 && freqCount > 0 && index === 5:
          freqRating = 'Annual';
          break;
        case pubPeriod < 3 && freqCount > 0 && index === 2:
          freqRating = 'Annual';
          break;
      }
    }
  }

  return freqRating;
}

function calculateUpdateSignatoryFrequency(db) {
  console.log(
    `[${new Date().toString()}] calculating and update signatories frequencies`
  );
  db.get('signatories')
    .apply()
    .then(sigResp => {
      const signatories = sigResp.data.result;
      const url = `${
        process.env.REACT_APP_DS_API
      }/search/activity/?q=reporting_org_ref:(${signatories
        .map(sig => sig.IATIOrgRef)
        .join(
          ' '
        )})&json.facet={"items": {"type":"terms","field":"reporting_org_ref","limit": -1,"facet":{"sub":"min(dataset_date_created)"}}}}&rows=0`;
      axios
        .get(url)
        .then(iatiResp => {
          const iatiSigs = iatiResp.data.facets.items.buckets;
          db.get('frequency')
            .sort('month_date')
            .apply()
            .then(sigFrequenciesResp => {
              const sigFrequencies = sigFrequenciesResp.data.result;
              const formatSigs = [];
              sortBy(signatories, 'name').forEach(cmsSig => {
                const freqTableData = formatFrequency(
                  filter(sigFrequencies, {
                    sig_ref: cmsSig.IATIOrgRef,
                  })
                );
                const firstPubDate = find(iatiSigs, {
                  val: cmsSig.IATIOrgRef.toLowerCase(),
                });

                const frequency = getFrequencyRating(
                  freqTableData,
                  firstPubDate ? firstPubDate.sub : '1900-01-01'
                );

                formatSigs.push({
                  sig_ref: cmsSig.IATIOrgRef,
                  value: frequency,
                });

                db.getOne('signatoryFrequency')
                  .where(cond('sig_ref', '==', cmsSig.IATIOrgRef))
                  .apply()
                  .then(fSigFreq => {
                    if (fSigFreq.status === 200) {
                      db.updateOne('signatoryFrequency')
                        .where(cond('sig_ref', '==', cmsSig.IATIOrgRef))
                        .set({
                          value: frequency,
                        })
                        .apply();
                    } else {
                      db.insert('signatoryFrequency')
                        .doc({
                          sig_ref: cmsSig.IATIOrgRef,
                          value: frequency,
                        })
                        .apply();
                    }
                  });
              });
            });
        })
        .catch(error => console.log(error));
    });
}

// We will set up space cloud services here
const api = new API(
  process.env.REACT_APP_PROJECT_ID,
  process.env.REACT_APP_SPACE_CLOUD_URL
);

const db = api.Mongo();

const service = api.Service('db-update');

// Register function to a service
service.registerFunc('updateSignatories', (params, auth, cb) => {
  // Response to be returned to client
  const res = {
    ack: true,
    message: `[${new Date().toString()}] - updateSignatories service start successfull`,
  };
  // and we start the worker to update signatories every 24hours
  setInterval(() => updateSignatories(db), 86400000);
  cb('response', res);
});

service.registerFunc('updateFrequency', (params, auth, cb) => {
  // and we start the worker to update frequencies every 24hours
  setInterval(() => updateFrequency(db), 86400000);
  cb(
    'response',
    `[${new Date().toString()}] - updateFrequency service start successfull`
  );
});

service.registerFunc(
  'calculateUpdateSignatoryFrequency',
  (params, auth, cb) => {
    // Response to be returned to client
    const res = {
      ack: true,
      message: `[${new Date().toString()}] - calculateUpdateSignatoryFrequency service start successfull`,
    };
    // and we start the worker to update signatories every 24hours
    setInterval(() => calculateUpdateSignatoryFrequency(db), 86400000);
    cb('response', res);
  }
);

// Start the service
service.start();

// calling the updateSignatories cronjob
setTimeout(
  () =>
    api
      .call('db-update', 'updateSignatories', {}, 5000)
      .then(res => {
        if (res.status === 200) {
          console.log(
            `[${new Date().toString()}] - updateSignatories service API CALL successfull`
          );
          console.log(res.data && res.data.result && res.data.result.message);
        } else {
          console.log(
            `[${new Date().toString()}] - updateSignatories service API CALL had some ERRORS`
          );
        }
      })
      .catch(ex => {
        console.log(
          `[${new Date().toString()}] - updateSignatories service API CALL CAUGHT ERRORS - ${ex}`
        );
        // Exception occured while processing request
      }),
  10000
);

// calling the update Frequencies cronjob
setTimeout(
  () =>
    api
      .call('db-update', 'updateFrequency', {}, 5000)
      .then(res => {
        if (res.status === 200) {
          console.log(
            `[${new Date().toString()}] - updateFrequency service API CALL successfull`
          );
          console.log(res.data && res.data.result);
        } else {
          console.log(
            `[${new Date().toString()}] - updateFrequency service API CALL had some ERRORS`
          );
        }
      })
      .catch(ex => {
        console.log(
          `[${new Date().toString()}] - updateFrequency service API CALL CAUGHT ERRORS - ${ex}`
        );
        // Exception occured while processing request
      }),
  10000
);

// calling the calculateUpdateSignatoryFrequency cronjob
setTimeout(
  () =>
    api
      .call('db-update', 'calculateUpdateSignatoryFrequency', {}, 5000)
      .then(res => {
        if (res.status === 200) {
          console.log(
            `[${new Date().toString()}] - calculateUpdateSignatoryFrequency service API CALL successfull`
          );
          console.log(res.data && res.data.result && res.data.result.message);
        } else {
          console.log(
            `[${new Date().toString()}] - calculateUpdateSignatoryFrequency service API CALL had some ERRORS`
          );
        }
      })
      .catch(ex => {
        console.log(
          `[${new Date().toString()}] - calculateUpdateSignatoryFrequency service API CALL CAUGHT ERRORS - ${ex}`
        );
        // Exception occured while processing request
      }),
  10000
);
