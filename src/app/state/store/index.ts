/* base */
import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

/* interfaces */
import { SpaceCloudModel, SyncVariablesModel } from 'app/state/api/interfaces';

/* action reducers */
import { spaceCloud, syncVariables } from 'app/state/api/actionsReducers';

const persistSessionConfig = {
  key: 'session',
  storage: storageSession,
};

export interface ApplicationStoreModel {
  spaceCloud: SpaceCloudModel;
  syncVariables: SyncVariablesModel;
}

const applicationStore: ApplicationStoreModel = {
  spaceCloud,
  syncVariables,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
