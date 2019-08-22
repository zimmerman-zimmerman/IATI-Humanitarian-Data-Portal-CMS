import { Action, Thunk } from 'easy-peasy';

/* interfces */
import { ErrorResponse } from 'app/state/api/interfaces';
import { Signatory } from 'app/modules/Signatory/store/interface';

export interface SignatoriesModel {
  allSignatories: Array<Signatory>;
  error: string | null;
  setError: Action<SignatoriesModel, ErrorResponse>;
  setAllSign: Action<SignatoriesModel, Array<Signatory>>;
  getAllSign: Thunk<SignatoriesModel>;
}
