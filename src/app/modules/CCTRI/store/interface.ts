import { Action, Thunk } from 'easy-peasy';

/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';

export interface CCTRI {
  _id?: string;
  title: string;
  summary: string;
  body: string;
}

export interface CCTRIModel {
  cctri: CCTRI;
  error: string | null;
  setError: Action<CCTRIModel, ErrorResponse>;
  setCCTRI: Action<CCTRIModel, CCTRI>;
  getCCTRI: Thunk<CCTRIModel>;
  editCCTRI: Thunk<CCTRIModel, CCTRI>;
}
