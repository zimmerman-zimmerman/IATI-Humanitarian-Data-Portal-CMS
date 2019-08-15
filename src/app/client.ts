import { Service } from './services/service';

export const client = new Service(process.env.REACT_APP_PROJECT_ID, process.env.REACT_APP_SPACE_CLOUD_URL);
