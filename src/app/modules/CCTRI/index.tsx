/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { CCTRILayout } from './layout';
import { withRouter } from 'react-router-dom';

/* utils */
import isEqual from 'lodash/isEqual';
import { beautifyCode } from 'app/utils/beautifyCode';

/* store */
import { cctriStore } from './store';
import { useStoreActions } from 'app/state/store/hooks';

export function CCTRIcomp(props) {
  const [state, actions] = cctriStore();
  const [localCCTRI, setLocalCCTRI] = React.useState({
    _id: '',
    title: '',
    summary: '',
    body: '',
  });
  const snackbarAction = useStoreActions(
    globalState => globalState.syncVariables.setSnackbar
  );

  React.useEffect(() => {
    actions.getCCTRI();
  }, []);
  React.useEffect(() => {
    state.status && snackbarAction(state.status as string);
  }, [state.status]);
  React.useEffect(() => {
    setLocalCCTRI({
      _id: state.cctri._id as string,
      title: state.cctri.title,
      summary: beautifyCode(state.cctri.summary),
      body: beautifyCode(state.cctri.body),
    });
  }, [state.cctri]);

  return (
    <CCTRILayout
      titleValue={localCCTRI.title}
      setTitleValue={value => setLocalCCTRI({ ...localCCTRI, title: value })}
      summaryValue={localCCTRI.summary}
      setSummaryValue={value =>
        setLocalCCTRI({ ...localCCTRI, summary: value })
      }
      bodyValue={localCCTRI.body}
      setBodyValue={value => setLocalCCTRI({ ...localCCTRI, body: value })}
      areChanges={!isEqual(localCCTRI, state.cctri)}
      discardChanges={() =>
        setLocalCCTRI({
          ...localCCTRI,
          title: state.cctri.title,
          summary: beautifyCode(state.cctri.summary),
          body: beautifyCode(state.cctri.body),
        })
      }
      saveChanges={() => actions.editCCTRI(localCCTRI)}
    />
  );
}

export const CCTRI = withRouter(CCTRIcomp);
