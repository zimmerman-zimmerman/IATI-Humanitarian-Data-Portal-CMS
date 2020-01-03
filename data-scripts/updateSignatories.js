/* eslint-disable @typescript-eslint/no-var-requires */
process.env.NODE_ENV = 'production';

require('../config/env');

const { API, cond } = require('space-api');
const axios = require('axios');

const api = new API(
  process.env.REACT_APP_PROJECT_ID,
  process.env.REACT_APP_SPACE_CLOUD_URL
);
const db = api.Mongo();

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
          })
          .catch(err => console.log(err));

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
          })
          .catch(err => console.log(err));
      }
    });
  });
