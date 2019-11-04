import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const signatoryProgressInit = require('./data/signatoryProgress.json');
export function loadSignatoryProgress() {
  const signatoryProgressDoc = {
    _id: generateId(),
    firstDate: signatoryProgressInit.firstDate,
    secondDate: signatoryProgressInit.secondDate,
    thirdDate: signatoryProgressInit.thirdDate,

    totalSigFirstDate: signatoryProgressInit.totalSigFirstDate,
    totalSigSecondDate: signatoryProgressInit.totalSigSecondDate,
    totalSigThirdDate: signatoryProgressInit.totalSigThirdDate,

    publishingOpenDataIATIFirstDate:
      signatoryProgressInit.publishingOpenDataIATIFirstDate,
    publishingOpenDataIATISecondDate:
      signatoryProgressInit.publishingOpenDataIATISecondDate,
    publishingOpenDataIATIThirdDate:
      signatoryProgressInit.publishingOpenDataIATIThirdDate,

    publishingHumanitarianActivitiesFirstDate:
      signatoryProgressInit.publishingHumanitarianActivitiesFirstDate,
    publishingHumanitarianActivitiesSecondDate:
      signatoryProgressInit.publishingHumanitarianActivitiesSecondDate,
    publishingHumanitarianActivitiesThirdDate:
      signatoryProgressInit.publishingHumanitarianActivitiesThirdDate,

    using202OrLaterFirstDate: signatoryProgressInit.using202OrLaterFirstDate,
    using202OrLaterSecondDate: signatoryProgressInit.using202OrLaterSecondDate,
    using202OrLaterThirdDate: signatoryProgressInit.using202OrLaterThirdDate,

    providingGranular202DataFirstDate:
      signatoryProgressInit.providingGranular202DataFirstDate,
    providingGranular202DataSecondDate:
      signatoryProgressInit.providingGranular202DataSecondDate,
    providingGranular202DataThirdDate:
      signatoryProgressInit.providingGranular202DataThirdDate,
  };

  db.insert('signatoryProgress')
    .doc(signatoryProgressDoc)
    .apply();
}

export function deleteSignatoryProgress() {
  db.delete('signatoryProgress').apply();
}
