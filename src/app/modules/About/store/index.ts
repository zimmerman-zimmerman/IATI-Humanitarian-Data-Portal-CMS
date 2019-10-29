import { action, createComponentStore, thunk } from 'easy-peasy';

/* api */
import { db } from 'app/state/api/actionsReducers';
import { generateId, getDBTableData } from 'app/state/utils/general';

/* interfaces */
import { AboutTextBlock, AboutTextBlockModel } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

const about: AboutTextBlockModel = {
  aboutTextBlocks: [{ _id: '', title: '', body: '', moreLink: '' }],
  error: null,
  status: null,
  setError: action((state, payload: ErrorResponse) => {
    state.status = payload.data.error;
    state.error = payload.data.error;
  }),
  setStatus: action((state, payload: ErrorResponse) => {
    state.status = payload.status === 200 ? 'Success' : null;
  }),
  setAboutTextBlocks: action((state, payload: AboutTextBlock[]) => {
    state.aboutTextBlocks = payload;
  }),
  getAboutTextBlocks: thunk(async actions =>
    getDBTableData(
      'aboutTextBlocks',
      actions.setAboutTextBlocks,
      actions.setError
    )
  ),
  editAboutTextBlocks: thunk(async (actions, payload: AboutTextBlock[]) => {
    db.delete('aboutTextBlocks')
      .apply()
      .then(() => {
        db.insert('aboutTextBlocks')
          .docs(
            payload.map(block => ({
              _id: generateId(),
              title: block.title,
              body: block.body,
              moreLink: block.moreLink,
            }))
          )
          .apply()
          .then(res => actions.setStatus(res));
      });
  }),
};

export const aboutStore = createComponentStore(about);
