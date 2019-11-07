import { action, createComponentStore, thunk } from 'easy-peasy';
import { History } from 'history';
import { cond } from 'space-api';

/* api */
import { db } from 'app/state/api/actionsReducers';

/* utils */
import { generateId } from 'app/state/utils/general';

/* interfaces */
import {
  SignatoryProgress,
  SignatoryProgressEdit,
  SignatoryProgressModel,
  UpdateSigProgressPayload,
} from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

const signatoryProgressInit: SignatoryProgress = {
  Date: '',
  totalSig: '',
  publishingOpenDataIATI: '',
  publishingHumanitarianActivities: '',
  using202OrLater: '',
  providingGranular202Data: '',
};

const signatoryProgress: SignatoryProgressModel = {
  orgSignitem: null,
  signitem: signatoryProgressInit,
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setSignatoryProgress: action((state, payload: SignatoryProgress) => {
    state.signitem = payload;
    state.orgSignitem = payload;
  }),
  getSignatoryProgress: thunk(async (actions, id: string) => {
    const res = await db
      .getOne('signatoriesProgress')
      .where(cond('_id', '==', id))
      .apply();

    if (res.status === 200) {
      actions.setSignatoryProgress(res.data.result);
    } else {
      actions.setError(res);
    }
  }),
  editSignatoryProgress: action((state, payload: SignatoryProgressEdit) => {
    state.signitem = {
      ...state.signitem,
      [payload.key]: payload.value,
    };
  }),
  addSignatoryProgress: thunk(
    async (actions, history: History, { getState }) => {
      const signitem = getState().signitem;

      signitem._id = generateId();
      await db
        .insert('signatoriesProgress')
        .doc(signitem)
        .apply();

      history.push('/signatory-progress-list');
    }
  ),
  updateSignatoryProgress: thunk(
    async (actions, payload: UpdateSigProgressPayload, { getState }) => {
      const signitem = getState().signitem;

      await db
        .updateOne('signatoriesProgress')
        .where(cond('_id', '==', payload._id))
        .set(signitem)
        .apply();

      payload.history.push('/signatory-progress-list');
    }
  ),
  discardChanges: action(state => {
    if (state.orgSignitem) {
      state.signitem = state.orgSignitem;
    }
  }),
  deleteSignatoryProgress: thunk(async (actions, payload) => {
    await db
      .deleteOne('signatoriesProgress')
      .where(cond('_id', '==', payload._id))
      .apply();

    payload.history.push('/signatory-progress-list');
  }),
};

export const signatoryProgressStore = createComponentStore(signatoryProgress);
