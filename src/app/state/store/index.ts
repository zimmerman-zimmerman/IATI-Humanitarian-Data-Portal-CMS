import { createStore } from 'easy-peasy';
import { SpaceCloudModel } from 'app/state/api/interfaces';
import { spaceCloud } from 'app/state/api/actionsReducers';

export interface ApplicationStoreModel {
  spaceCloud: SpaceCloudModel;
}

const applicationStore: ApplicationStoreModel = {
  spaceCloud,
};

const appStore = createStore(applicationStore);

export default appStore;
