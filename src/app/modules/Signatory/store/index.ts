import { action, createComponentStore, thunk } from 'easy-peasy';
import { History } from 'history';
import { cond } from 'space-api';

/* api */
import { db } from 'app/state/api/actionsReducers';

/* consts */
import { orgTypeOptions } from 'app/__consts__/dataConsts';
import { genericOpt, iatiOpt } from '../const';

/* utils */
import { generateId } from 'app/state/utils/general';

/* interfaces */
import {
  Signatory,
  SignatoryEdit,
  SignatoryModel,
  UpdateSigPayload,
} from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

const signatoryInit: Signatory = {
  pubName: '',
  orgType: orgTypeOptions[0].value,
  name: '',
  regPubId: '',
  IATIOrgRef: '',
  suppInfoUrl: '',
  fiscalStart: '',
  fiscalEnd: '',
  firstPubDate: '',
  reportsToEU: genericOpt[0].value,
  reportsToFTS: genericOpt[0].value,
  reportsToFTSViaIATI: iatiOpt[0].value,
  tracability: genericOpt[0].value,
};

const signatory: SignatoryModel = {
  orgSignitem: null,
  signitem: signatoryInit,
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setSignatory: action((state, payload: Signatory) => {
    state.signitem = payload;
    state.orgSignitem = payload;
  }),
  getSignatory: thunk(async (actions, id: string) => {
    const res = await db
      .getOne('signatories')
      .where(cond('_id', '==', id))
      .apply();

    if (res.status === 200) {
      actions.setSignatory(res.data.result);
    } else {
      actions.setError(res);
    }
  }),
  editSignatory: action((state, payload: SignatoryEdit) => {
    state.signitem = {
      ...state.signitem,
      [payload.key]: payload.value,
    };
  }),
  addSignatory: thunk(async (actions, history: History, { getState }) => {
    const signitem = getState().signitem;

    signitem._id = generateId();
    await db
      .insert('signatories')
      .doc(signitem)
      .apply();

    history.push('/signatories');
  }),
  updateSignatory: thunk(
    async (actions, payload: UpdateSigPayload, { getState }) => {
      const signitem = getState().signitem;

      await db
        .updateOne('signatories')
        .where(cond('_id', '==', payload._id))
        .set(signitem)
        .apply();

      payload.history.push('/signatories');
    }
  ),
  discardChanges: action(state => {
    if (state.orgSignitem) {
      state.signitem = state.orgSignitem;
    }
  }),
  deleteSignatory: thunk(async (actions, payload) => {
    await db
      .deleteOne('signatories')
      .where(cond('_id', '==', payload._id))
      .apply();

    payload.history.push('/signatories');
  }),
};

export const signatoryStore = createComponentStore(signatory);
