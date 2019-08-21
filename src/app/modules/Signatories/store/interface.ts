import { Action, Thunk } from 'easy-peasy';
import { ErrorResponse } from 'app/state/api/interfaces';

export interface Signatory {
  _id: string;
  pubName: string;
  orgType: string;
  name: string;
  regPubId: string;
  IATIOrgRef: string;
  suppInfoUrl: string;
  fiscalStart: string;
  fiscalEnd: string;
  firstPubDate: string;
  reportsToEU: string;
  reportsToFTS: string;
  reportsToFTSViaIATI: string;
  tracability?: string;
}

export interface SignatoriesModel {
  allSignatories: Array<Signatory>;
  error: string | null;
  setError: Action<SignatoriesModel, ErrorResponse>;
  setAllSign: Action<SignatoriesModel, Array<Signatory>>;
  getAllSign: Thunk<SignatoriesModel>;
}
