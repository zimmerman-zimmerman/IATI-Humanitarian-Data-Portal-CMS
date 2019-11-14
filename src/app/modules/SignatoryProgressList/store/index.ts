import { action, createComponentStore, thunk } from 'easy-peasy';

/* api */
import { getDBTableData } from 'app/state/utils/general';

/* interfaces */
import { SignatoryProgressModel } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';
import { SignatoryProgress } from 'app/modules/SignatoryProgress/store/interface';

const signatoryProgressList: SignatoryProgressModel = {
  allSignatoryProgress: [],
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setAllSigProgress: action((state, payload: Array<SignatoryProgress>) => {
    state.allSignatoryProgress = payload;
  }),
  getAllSigProgress: thunk(async actions =>
    getDBTableData(
      'signatoriesProgress',
      actions.setAllSigProgress,
      actions.setError
    )
  ),
};

export const signatoryProgressListStore = createComponentStore(
  signatoryProgressList
);
