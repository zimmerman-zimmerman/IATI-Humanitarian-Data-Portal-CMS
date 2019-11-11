import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

import signatoryProgressUpdate from './data/signatoryProgressUpdate.json';
// so this is a random dirty script
// to run on the frontend locally
// to pump up signatories from the json
// into our space cloud backend
export function loadSignatoryProgress() {
  signatoryProgressUpdate.forEach(signatoryProgress => {
    const sigProgressDoc = {
      _id: generateId(),
      totalSig: signatoryProgress.totalSig,
      Date: signatoryProgress.Date,
      publishingOpenDataIATI: signatoryProgress.publishingOpenDataIATI,
      publishingHumanitarianActivities:
        signatoryProgress.publishingHumanitarianActivities,
      using202OrLater: signatoryProgress.using202OrLater,
      providingGranular202Data: signatoryProgress.providingGranular202Data,
      providingGranular203Data: signatoryProgress.providingGranular203Data,
      publishingTraceabilityInfo: signatoryProgress.publishingTraceabilityInfo,
    };

    db.insert('signatoriesProgress')
      .doc(sigProgressDoc)
      .apply();
  });

  console.log('done');
}

export function deleteSignatoryProgress() {
  db.delete('signatoriesProgress').apply();
}
