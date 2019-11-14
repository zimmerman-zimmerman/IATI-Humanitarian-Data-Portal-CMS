import { Action, Thunk } from 'easy-peasy';
/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';
import { SignatoryProgress } from 'app/modules/SignatoryProgress/store/interface';

export interface SignatoryProgressModel {
  allSignatoryProgress: Array<SignatoryProgress>;
  error: string | null;
  setError: Action<SignatoryProgressModel, ErrorResponse>;
  setAllSigProgress: Action<SignatoryProgressModel, Array<SignatoryProgress>>;
  getAllSigProgress: Thunk<SignatoryProgressModel>;
}
