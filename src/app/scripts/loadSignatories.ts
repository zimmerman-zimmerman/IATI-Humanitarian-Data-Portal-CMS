import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const publishers = require('./data/publishers.json');

// so this is a random dirty script
// to run on the frontend locally
// to pump up signatories from the json
// into our space cloud backend
export function loadSignatories() {
  publishers.forEach(publisher => {
    const pubDoc = {
      _id: generateId(),
      pubName: publisher.Publisher,
      orgType: publisher.OrganisationType,
      name: publisher.Signatory,
      regPubId: publisher.RegistryPubID,
      IATIOrgRef: publisher.IATIOrgRef,
      suppInfoUrl: publisher.SuppInfoUrl,
      fiscalStart: publisher.FiscalYearStart,
      fiscalEnd: publisher.FiscalYearEnd,
      firstPubDate: publisher.FirstPublished,
      reportsToEU: publisher.ReportsToEU,
      reportsToFTS: publisher.ReportsToFTS,
      reportsToFTSViaIATI: publisher.ReportsToFTSViaIATI,
    };

    db.insert('signatories')
      .doc(pubDoc)
      .apply();
  });
}
