process.env.NODE_ENV = 'production';

require('../config/env');

const { API } = require('space-api');
const axios = require('axios');
const { cond } = require('space-api');

function updateSignatories (db){
  db.get('signatories').apply().then(resp => {
    const signatories = resp.data.result;
    signatories.forEach(signatory => {
      if(signatory.IATIOrgRef && signatory.IATIOrgRef.length > 0){
        // console.log('signatory', signatory);
        // so here we get the current signatories first dataset published date
        // and its current regPubId(publisher_name)
        // and we update the cms signatories
        axios.get(`${process.env.REACT_APP_DS_API}/search/dataset/select/`, {
          params: {
            q: `publisher_iati_id:${signatory.IATIOrgRef}`,
            fl: "publisher_name,date_created",
            sort: "date_created asc",
            rows: "1"
          }
        }).then(res =>{
          if(res.data && res.data.response && res.data.response.docs && res.data.response.docs[0]){
            const iatiItem = res.data.response.docs[0];

            db
              .updateOne('signatories')
              .where(cond('_id', '==', signatory._id))
              .set({
                firstPubDate: iatiItem.date_created.substring(0, 10),
                regPubId: iatiItem.publisher_name
              })
              .apply().then(() => {
              console.log('signatory date and name successfully updated');
            });
          }
        });

        // here we get the current signatory organisations organisation name
        // and again update the signatory
        axios.get(`${process.env.REACT_APP_DS_API}/search/activity/select/`, {
          params: {
            q: `reporting_org_ref:${signatory.IATIOrgRef}`,
            fl: "reporting_org_type_name",
            rows: "1"
          }
        }).then(res =>{
          if(res.data && res.data.response && res.data.response.docs && res.data.response.docs[0]){
            const iatiItem = res.data.response.docs[0];

            db
              .updateOne('signatories')
              .where(cond('_id', '==', signatory._id))
              .set({
                orgType: iatiItem.reporting_org_type_name,
              })
              .apply().then(() => {
              console.log('signatory type successfully updated');
            });
          }
        });
      }
    });
  });
}

// We will set up space cloud services here
const api = new API(process.env.REACT_APP_PROJECT_ID,
  process.env.REACT_APP_SPACE_CLOUD_URL);

const db = api.Mongo();

const service = api.Service('db-update');

// Register function to a service
service.registerFunc('updateSignatories', (params, auth, cb) => {
  // Response to be returned to client
  const res = { ack: true, message: 'Signatories update started' };
  // and we start the worker to update signatories every 24hours
  // 86400000
  setInterval(() => updateSignatories(db), 40000);
  cb('response', res);
});

// Start the service
service.start();

setTimeout(() => api.call('db-update', 'updateSignatories', { }, 5000)
  .then(res => {
    if (res.status === 200) {
      console.log(res.data && res.data.result && res.data.result.message);
    }
  }).catch(ex => {
    // Exception occured while processing request
  }), 10000);
