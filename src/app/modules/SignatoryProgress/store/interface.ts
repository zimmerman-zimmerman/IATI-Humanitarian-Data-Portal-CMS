import { Action, Thunk } from 'easy-peasy';
import { History } from 'history';

/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';

export interface UpdateSigProgressPayload {
  history: History;
  _id: string;
}

export interface SignatoryProgressEdit {
  key:
    | 'Date'
    | 'totalSig'
    | 'publishingOpenDataIATI'
    | 'publishingHumanitarianActivities'
    | 'using202OrLater'
    | 'providingGranular202Data'
    | 'providingGranular203Data'
    | 'publishingTraceabilityInfo';
  value: string;
}

export interface SignatoryProgress {
  _id?: string;
  Date: string;
  totalSig: string;
  publishingOpenDataIATI: string;
  publishingHumanitarianActivities: string;
  using202OrLater: string;
  providingGranular202Data: string;
  providingGranular203Data: string;
  publishingTraceabilityInfo: string;
}

export interface SignatoryProgressModel {
  existingSignatoryProgressItem: SignatoryProgress | null;
  signatoryProgressItem: SignatoryProgress;
  error: string | null;
  setError: Action<SignatoryProgressModel, ErrorResponse>;
  setSignatoryProgress: Action<SignatoryProgressModel, SignatoryProgress>;
  getSignatoryProgress: Thunk<SignatoryProgressModel, string>;
  editSignatoryProgress: Action<SignatoryProgressModel, SignatoryProgressEdit>;
  addSignatoryProgress: Thunk<SignatoryProgressModel, History>;
  updateSignatoryProgress: Thunk<
    SignatoryProgressModel,
    UpdateSigProgressPayload
  >;
  discardChanges: Action<SignatoryProgressModel>;
  deleteSignatoryProgress: Thunk<
    SignatoryProgressModel,
    UpdateSigProgressPayload
  >;
}
