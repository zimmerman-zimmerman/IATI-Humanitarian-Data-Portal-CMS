import { Action, Thunk } from 'easy-peasy';
import { History } from 'history';

/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';

export interface UpdateSigPayload {
  history: History;
  _id: string;
}

export interface SignatoryEdit {
  key:
    | 'pubName'
    | 'orgType'
    | 'name'
    | 'regPubId'
    | 'IATIOrgRef'
    | 'suppInfoUrl'
    | 'fiscalStart'
    | 'fiscalEnd'
    | 'firstPubDate'
    | 'reportsToEU'
    | 'reportsToFTS'
    | 'reportsToFTSViaIATI'
    | 'tracability';
  value: string;
}

export interface Signatory {
  _id?: string;
  pubName: string;
  orgType: string;
  name: string;
  regPubId: string;
  IATIOrgRef: string;
  suppInfoUrl: string;
  fiscalStart?: string;
  fiscalEnd?: string;
  firstPubDate: string;
  reportsToEU: string;
  reportsToFTS: string;
  reportsToFTSViaIATI: string;
  tracability?: string;
}

export interface SignatoryModel {
  orgSignitem: Signatory | null;
  signitem: Signatory;
  error: string | null;
  setError: Action<SignatoryModel, ErrorResponse>;
  setSignatory: Action<SignatoryModel, Signatory>;
  getSignatory: Thunk<SignatoryModel, string>;
  editSignatory: Action<SignatoryModel, SignatoryEdit>;
  addSignatory: Thunk<SignatoryModel, History>;
  updateSignatory: Thunk<SignatoryModel, UpdateSigPayload>;
  discardChanges: Action<SignatoryModel>;
  deleteSignatory: Thunk<SignatoryModel, UpdateSigPayload>;
}
