/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { CCTRILayout } from './layout';
import { withRouter } from 'react-router-dom';

/* utils */
import isEqual from 'lodash/isEqual';

/* store */
import { cctriStore } from './store';

export function CCTRIcomp(props) {
  const [state, actions] = cctriStore();
  const [localCCTRI, setLocalCCTRI] = React.useState({
    _id: '',
    title: '',
    summary: '',
    body: '',
  });

  React.useEffect(() => {
    actions.getCCTRI();
  }, []);
  React.useEffect(() => {
    setLocalCCTRI({
      _id: state.cctri._id as string,
      title: state.cctri.title,
      summary: state.cctri.summary,
      body: state.cctri.body,
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
          title: state.cctri.title as string,
          summary: state.cctri.summary as string,
          body: state.cctri.body as string,
        })
      }
      saveChanges={() => actions.editCCTRI(localCCTRI)}
    />
  );
}

export const CCTRI = withRouter(CCTRIcomp);
