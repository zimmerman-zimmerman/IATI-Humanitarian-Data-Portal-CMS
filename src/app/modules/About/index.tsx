/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { AboutLayout } from './layout';
import { withRouter } from 'react-router-dom';

/* utils */
import isEqual from 'lodash/isEqual';
import findIndex from 'lodash/findIndex';
import { beautifyCode } from 'app/utils/beautifyCode';

/* store */
import { aboutStore } from './store';
import { useStoreActions } from 'app/state/store/hooks';

export function Aboutcomp(props) {
  const [state, actions] = aboutStore();
  const [localAboutTextBlocks, setLocalAboutTextBlocks] = React.useState([
    { _id: '', title: '', body: '', moreLink: '' },
  ]);
  const snackbarAction = useStoreActions(
    globalState => globalState.syncVariables.setSnackbar
  );

  React.useEffect(() => {
    actions.getAboutTextBlocks();
  }, []);
  React.useEffect(() => {
    state.status && snackbarAction(state.status as string);
  }, [state.status]);
  React.useEffect(() => {
    setLocalAboutTextBlocks(
      state.aboutTextBlocks.map(block => ({
        _id: block._id as string,
        title: block.title,
        body: beautifyCode(block.body),
        moreLink: block.moreLink,
      }))
    );
  }, [state.aboutTextBlocks]);

  const setTextBlockFields = (_id, title, body) => {
    const allBlocks = [...localAboutTextBlocks];
    const blockIndex = findIndex(allBlocks, { _id });
    allBlocks[blockIndex].title = title;
    allBlocks[blockIndex].body = body;
    setLocalAboutTextBlocks(allBlocks);
  };

  return (
    <AboutLayout
      textBlocks={localAboutTextBlocks}
      areChanges={!isEqual(localAboutTextBlocks, state.aboutTextBlocks)}
      discardChanges={() =>
        setLocalAboutTextBlocks(
          state.aboutTextBlocks.map(block => ({
            _id: block._id as string,
            title: block.title,
            body: beautifyCode(block.body),
            moreLink: block.moreLink,
          }))
        )
      }
      setTextBlockFields={setTextBlockFields}
      saveChanges={() => actions.editAboutTextBlocks(localAboutTextBlocks)}
    />
  );
}

export const About = withRouter(Aboutcomp);
