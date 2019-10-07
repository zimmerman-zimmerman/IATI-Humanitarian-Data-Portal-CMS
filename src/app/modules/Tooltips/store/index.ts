import { action, createComponentStore, thunk } from 'easy-peasy';

/* api */
import { cond } from 'space-api';
import { db } from 'app/state/api/actionsReducers';

/* interfaces */
import { TooltipsModel, Tooltip } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

const tooltips: TooltipsModel = {
  allTooltips: [],
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setAllTooltips: action((state, payload: Array<Tooltip>) => {
    state.allTooltips = payload;
  }),
  editTooltip: thunk(async (actions, payload: any) => {
    db.updateOne('tooltips')
      .where(cond('_id', "==", payload.id))
      .set({ ...payload.object })
      .apply()
      .then(async () => {
        // const res = await db.get('tooltips').apply();
        // if (res.status === 200) {
        //   actions.setAllTooltips(res.data.result);
        // } else {
        //   actions.setError(res);
        // }
      });
  }),
  getAllTooltips: thunk(async actions => {
    const res = await db.get('tooltips').apply();
    if (res.status === 200) {
      actions.setAllTooltips(res.data.result);
    } else {
      actions.setError(res);
    }
  }),
};

export const tooltipStore = createComponentStore(tooltips);
