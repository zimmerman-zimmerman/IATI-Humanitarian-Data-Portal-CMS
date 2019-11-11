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
  providingGranular203Data: '',
  publishingTraceabilityInfo: '',
};

const signatoryProgress: SignatoryProgressModel = {
  existingSignatoryProgressItem: null,
  signatoryProgressItem: signatoryProgressInit,
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setSignatoryProgress: action((state, payload: SignatoryProgress) => {
    state.signatoryProgressItem = payload;
    state.existingSignatoryProgressItem = payload;
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
    state.signatoryProgressItem = {
      ...state.signatoryProgressItem,
      [payload.key]: payload.value,
    };
  }),
  addSignatoryProgress: thunk(
    async (actions, history: History, { getState }) => {
      const signatoryProgressItem = getState().signatoryProgressItem;

      signatoryProgressItem.publishingHumanitarianActivities = signatoryProgressItem.publishingHumanitarianActivities
        ? signatoryProgressItem.publishingHumanitarianActivities
        : 'NOT MEASURED';
      signatoryProgressItem.using202OrLater = signatoryProgressItem.using202OrLater
        ? signatoryProgressItem.using202OrLater
        : 'NOT MEASURED';
      signatoryProgressItem.providingGranular202Data = signatoryProgressItem.providingGranular202Data
        ? signatoryProgressItem.providingGranular202Data
        : 'NOT MEASURED';
      signatoryProgressItem.providingGranular203Data = signatoryProgressItem.providingGranular203Data
        ? signatoryProgressItem.providingGranular203Data
        : 'NOT MEASURED';
      signatoryProgressItem.publishingTraceabilityInfo = signatoryProgressItem.publishingTraceabilityInfo
        ? signatoryProgressItem.publishingTraceabilityInfo
        : 'NOT MEASURED';
      signatoryProgressItem._id = generateId();
      await db
        .insert('signatoriesProgress')
        .doc(signatoryProgressItem)
        .apply();

      history.push('/signatory-progress-list');
    }
  ),
  updateSignatoryProgress: thunk(
    async (actions, payload: UpdateSigProgressPayload, { getState }) => {
      const signatoryProgressItem = getState().signatoryProgressItem;

      signatoryProgressItem.publishingHumanitarianActivities = signatoryProgressItem.publishingHumanitarianActivities
        ? signatoryProgressItem.publishingHumanitarianActivities
        : 'NOT MEASURED';
      signatoryProgressItem.using202OrLater = signatoryProgressItem.using202OrLater
        ? signatoryProgressItem.using202OrLater
        : 'NOT MEASURED';
      signatoryProgressItem.providingGranular202Data = signatoryProgressItem.providingGranular202Data
        ? signatoryProgressItem.providingGranular202Data
        : 'NOT MEASURED';
      signatoryProgressItem.providingGranular203Data = signatoryProgressItem.providingGranular203Data
        ? signatoryProgressItem.providingGranular203Data
        : 'NOT MEASURED';
      signatoryProgressItem.publishingTraceabilityInfo = signatoryProgressItem.publishingTraceabilityInfo
        ? signatoryProgressItem.publishingTraceabilityInfo
        : 'NOT MEASURED';

      await db
        .updateOne('signatoriesProgress')
        .where(cond('_id', '==', payload._id))
        .set(signatoryProgressItem)
        .apply();

      payload.history.push('/signatory-progress-list');
    }
  ),
  discardChanges: action(state => {
    if (state.existingSignatoryProgressItem) {
      state.signatoryProgressItem = state.existingSignatoryProgressItem;
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
