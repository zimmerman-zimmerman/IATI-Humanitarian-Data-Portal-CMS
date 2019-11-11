import React, { useEffect } from 'react';
import { SignatoryProgressLayout } from './layout';
import { withRouter } from 'react-router-dom';

/* consts */
import { orgTypeOptions } from 'app/__consts__/dataConsts';
//import { genericOpt, iatiOpt } from './const';

/* store */
import { signatoryProgressStore } from './store';

export function SignatoryProgressComp(props) {
  const [state, actions] = signatoryProgressStore();

  useEffect(() => {
    if (props.match.params.id) {
      actions.getSignatoryProgress(props.match.params.id);
    }
  }, []);

  const inputCardData = {
    signatoryProgressDetail: {
      title: 'Signatory Progress',
      titleInput: {
        value: state.signatoryProgressItem.Date,
        label: 'Enter Date (*Date must be today or later than today)',
        type: 'date',
        setValue: value =>
          actions.editSignatoryProgress({ key: 'Date', value }),
        placeholder: '0000/00/00',
      },
      data: [
        {
          label: 'Total Signatories',
          value: state.signatoryProgressItem.totalSig,
          type: 'text',
          setValue: value =>
            actions.editSignatoryProgress({ key: 'totalSig', value }),
          placeholder: '0',
        },
        {
          label: 'Publishing Open Data using IATI',
          value: state.signatoryProgressItem.publishingOpenDataIATI,
          type: 'text',
          setValue: value =>
            actions.editSignatoryProgress({
              key: 'publishingOpenDataIATI',
              value,
            }),
          //options: orgTypeOptions,
          placeholder: '0',
        },
        {
          label: 'Publishing data on their humanitarian activities',
          value: state.signatoryProgressItem.publishingHumanitarianActivities,
          type: 'text',
          setValue: value =>
            actions.editSignatoryProgress({
              key: 'publishingHumanitarianActivities',
              value,
            }),
          placeholder: 'NOT MEASURED',
        },
        {
          label: 'Using v2.02 of the IATI standard or Later ',
          type: 'text',
          value: state.signatoryProgressItem.using202OrLater,
          setValue: value =>
            actions.editSignatoryProgress({ key: 'using202OrLater', value }),
          placeholder: 'NOT MEASURED',
        },
        {
          label: 'Providing more granular v2.02 data ',
          type: 'text',
          value: state.signatoryProgressItem.providingGranular202Data,
          setValue: value =>
            actions.editSignatoryProgress({
              key: 'providingGranular202Data',
              value,
            }),
          placeholder: 'NOT MEASURED',
        },
        {
          label: 'Providing more granular v2.03 data ',
          type: 'text',
          value: state.signatoryProgressItem.providingGranular203Data,
          setValue: value =>
            actions.editSignatoryProgress({
              key: 'providingGranular203Data',
              value,
            }),
          placeholder: 'NOT MEASURED',
        },
        {
          label: 'Publishing Traceability Information',
          type: 'text',
          value: state.signatoryProgressItem.publishingTraceabilityInfo,
          setValue: value =>
            actions.editSignatoryProgress({
              key: 'publishingTraceabilityInfo',
              value,
            }),
          placeholder: 'NOT MEASURED',
        },
      ],
    },
  };

  return (
    <SignatoryProgressLayout
      signatoryProgressItem={state.signatoryProgressItem}
      existingSignatoryProgressItem={state.existingSignatoryProgressItem}
      edit={props.history.location.pathname.indexOf('edit-signatory') !== -1}
      signatoryProgressDetail={inputCardData.signatoryProgressDetail}
      addSignatoryProgress={() => actions.addSignatoryProgress(props.history)}
      updateSignatoryProgress={() =>
        actions.updateSignatoryProgress({
          history: props.history,
          _id: props.match.params.id,
        })
      }
      discardChanges={actions.discardChanges}
      deleteSignatoryProgress={() =>
        actions.deleteSignatoryProgress({
          history: props.history,
          _id: props.match.params.id,
        })
      }
    />
  );
}

export const SignatoryProgress = withRouter(SignatoryProgressComp);
