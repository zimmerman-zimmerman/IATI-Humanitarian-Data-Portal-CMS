import { action, createComponentStore, thunk } from 'easy-peasy';

/* api */
import { getDBTableData } from 'app/state/utils/general';

/* interfaces */
import { SignatoriesModel } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';
import { Signatory } from 'app/modules/Signatory/store/interface';

const signatories: SignatoriesModel = {
  allSignatories: [],
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setAllSign: action((state, payload: Array<Signatory>) => {
    state.allSignatories = payload;
  }),
  getAllSign: thunk(async actions =>
    getDBTableData('signatories', actions.setAllSign, actions.setError)
  ),
};

export const signatoriesStore = createComponentStore(signatories);
