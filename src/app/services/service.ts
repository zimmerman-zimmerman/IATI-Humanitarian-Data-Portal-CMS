import { API } from 'space-api';

interface cmsResponse {
  ack: boolean;
}

export class Service {
  public api: API;
  public db: any;
  public userId: string | undefined;

  constructor(projectId: string | undefined, url: string | undefined) {
    this.api = new API(projectId, url);
    this.db = this.api.Mongo();
  }

  async login (email: string, pass: string): Promise<cmsResponse> {
    const res = await this.db.signIn(email, pass);

    // Check if login was successfull
    if (res.status !== 200) {
      return { ack: false };
    }

    this.api.setToken(res.data.token);

    this.userId = res.data.user._id;

    return { ack: true };
  };

  async createAccount(email: string, username: string, pass: string): Promise<cmsResponse> {
    // Fire the sign up request
    const res = await this.db.signUp(email, username, pass, 'default');

    // Check if sign up was successfull
    if (res.status !== 200) {
      console.log('res', res);
      return { ack: false };
    }

    // Set the token with the API object for authentication
    this.api.setToken(res.data.token);

    // Store the userId for further operation
    this.userId = res.data.user._id;

    return { ack: true };
  }

}
