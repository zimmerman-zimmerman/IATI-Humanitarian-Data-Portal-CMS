import { Action, Thunk } from 'easy-peasy';

/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';

export interface AboutTextBlock {
  _id?: string;
  title: string;
  body: string;
  moreLink: string;
}

export interface AboutTextBlockModel {
  aboutTextBlocks: AboutTextBlock[];
  error: string | null;
  status: string | null;
  setError: Action<AboutTextBlockModel, ErrorResponse>;
  setStatus: Action<AboutTextBlockModel, ErrorResponse>;
  setAboutTextBlocks: Action<AboutTextBlockModel, AboutTextBlock[]>;
  getAboutTextBlocks: Thunk<AboutTextBlockModel>;
  editAboutTextBlocks: Thunk<AboutTextBlockModel, AboutTextBlock[]>;
}
