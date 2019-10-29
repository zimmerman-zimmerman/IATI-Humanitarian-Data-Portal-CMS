import { action, createComponentStore, thunk } from 'easy-peasy';

/* api */
import { cond } from 'space-api';
import { db } from 'app/state/api/actionsReducers';
import { getDBTableData } from 'app/state/utils/general';

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
      .where(cond('_id', '==', payload.id))
      .set({ ...payload.object })
      .apply();
  }),
  getAllTooltips: thunk(async actions =>
    getDBTableData('tooltips', actions.setAllTooltips, actions.setError)
  ),
};

export const tooltipStore = createComponentStore(tooltips);
