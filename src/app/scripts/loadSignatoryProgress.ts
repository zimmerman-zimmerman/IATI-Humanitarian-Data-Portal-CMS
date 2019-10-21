import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const signatoryProgressInit = require('./data/signatoryProgress.json');
export function loadSignatoryProgress() {
  const signatoryProgressDoc = {
    _id: generateId(),
    publishingOpenDataIATIJune2017:
      signatoryProgressInit.publishingOpenDataIATIJune2017,
    publishingOpenDataIATIMay2018:
      signatoryProgressInit.publishingOpenDataIATIMay2018,
    publishingOpenDataIATIMay2019:
      signatoryProgressInit.publishingOpenDataIATIMay2019,

    publishingHumanitarianActivitiesJune2017:
      signatoryProgressInit.publishingHumanitarianActivitiesJune2017,
    publishingHumanitarianActivitiesMay2018:
      signatoryProgressInit.publishingHumanitarianActivitiesMay2018,
    publishingHumanitarianActivitiesMay2019:
      signatoryProgressInit.publishingHumanitarianActivitiesMay2019,

    using202OrLaterJune2017: signatoryProgressInit.using202OrLaterJune2017,
    using202OrLaterMay2018: signatoryProgressInit.using202OrLaterMay2018,
    using202OrLaterMay2019: signatoryProgressInit.using202OrLaterMay2019,

    providingGranular202DataJune2017:
      signatoryProgressInit.providingGranular202DataJune2017,
    providingGranular202DataMay2018:
      signatoryProgressInit.providingGranular202DataMay2018,
    providingGranular202DataMay2019:
      signatoryProgressInit.providingGranular202DataMay2019,
  };

  db.insert('signatoryProgress')
    .doc(signatoryProgressDoc)
    .apply();
}

export function deleteSignatoryProgress() {
  db.delete('signatoryProgress').apply();
}
