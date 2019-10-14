import { action, createComponentStore, thunk } from 'easy-peasy';
import { cond } from 'space-api';

/* api */
import { db } from 'app/state/api/actionsReducers';

/* interfaces */
import { CCTRI, CCTRIModel } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

const cctri: CCTRIModel = {
  cctri: { _id: '', title: '', summary: '', body: '' },
  error: null,
  status: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
    state.status = payload.data.error;
  }),
  setStatus: action((state, payload: ErrorResponse) => {
    state.status = payload.status === 200 ? 'Success' : null;
  }),
  setCCTRI: action((state, payload: CCTRI) => {
    state.cctri = payload;
  }),
  getCCTRI: thunk(async actions => {
    const res = await db.get('cctri').apply();

    if (res.status === 200) {
      actions.setCCTRI(res.data.result[0]);
    } else {
      actions.setError(res);
    }
  }),
  editCCTRI: thunk(async (actions, payload: CCTRI) => {
    db.updateOne('cctri')
      .where(cond('_id', '==', payload._id))
      .set({
        title: payload.title,
        summary: payload.summary,
        body: payload.body,
      })
      .apply()
      .then(res => actions.setStatus(res));;
    actions.setCCTRI(payload);
  }),
};

export const cctriStore = createComponentStore(cctri);
