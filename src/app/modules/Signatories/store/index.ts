import { action, createComponentStore, thunk } from 'easy-peasy';

/* api */
import { db } from 'app/state/api/actionsReducers';

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
  getAllSign: thunk(async actions => {
    const res = await db.get('signatories').apply();
    if (res.status === 200) {
      actions.setAllSign(res.data.result);
    } else {
      actions.setError(res);
    }
  }),
};

export const signatoriesStore = createComponentStore(signatories);
