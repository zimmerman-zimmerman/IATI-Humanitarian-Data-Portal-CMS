import React, { useEffect } from 'react';
import { SignatoryLayout } from './layout';
import { withRouter } from 'react-router-dom';

/* consts */
import { orgTypeOptions } from 'app/__consts__/dataConsts';
import { genericOpt, iatiOpt } from './const';

/* store */
import { signatoryStore } from './store';

export function SignatoryComp(props) {
  const [state, actions] = signatoryStore();

  useEffect(() => {
    if (props.match.params.id) {
      actions.getSignatory(props.match.params.id);
    }
  }, []);

  const inputCardData = {
    signatory: {
      title: 'Signatory',
      titleInput: {
        value: state.signitem.name,
        label: 'Enter signatory name',
        type: 'text',
        setValue: value => actions.editSignatory({ key: 'name', value }),
        placeholder: 'ActionAid UK',
      },
      data: [
        {
          label: 'Publisher name',
          value: state.signitem.pubName,
          type: 'text',
          setValue: value => actions.editSignatory({ key: 'pubName', value }),
          placeholder: 'AIDS found',
        },
        {
          label: 'Organisation Type',
          value: state.signitem.orgType,
          type: 'dropdown',
          setValue: value => actions.editSignatory({ key: 'orgType', value }),
          options: orgTypeOptions,
        },
        {
          label: 'Publisher Identifier (from IATI Registry)',
          value: state.signitem.regPubId,
          type: 'text',
          setValue: value => actions.editSignatory({ key: 'regPubId', value }),
          placeholder: '2423532',
        },
        {
          label: 'IATI Organisation Reference ',
          type: 'text',
          value: state.signitem.IATIOrgRef,
          setValue: value =>
            actions.editSignatory({ key: 'IATIOrgRef', value }),
          placeholder: 'No Data',
        },
      ],
    },
    financial: {
      title: 'Financial',
      data: [
        {
          label: 'Incoming financial tracability (Yes/No/N.A)',
          type: 'dropdown',
          value: state.signitem.tracability,
          setValue: value =>
            actions.editSignatory({ key: 'tracability', value }),
          options: genericOpt,
        },
        {
          label: 'FTS Reporter (Yes/No/N.A)',
          type: 'dropdown',
          value: state.signitem.reportsToFTS,
          setValue: value =>
            actions.editSignatory({ key: 'reportsToFTS', value }),
          options: genericOpt,
        },
        {
          label: 'Reporting to FTS via IATI(Yes/No/N.A/PILOT)',
          type: 'dropdown',
          value: state.signitem.reportsToFTSViaIATI,
          setValue: value =>
            actions.editSignatory({ key: 'reportsToFTSViaIATI', value }),
          options: iatiOpt,
        },
        {
          label: 'Reports to European Union (EDRIS)',
          type: 'dropdown',
          value: state.signitem.reportsToEU,
          setValue: value =>
            actions.editSignatory({ key: 'reportsToEU', value }),
          options: genericOpt,
        },
      ],
    },
    descriptive: {
      title: 'Descriptive',
      data: [
        {
          label: 'URL to publisher web page or document for supplementary info',
          type: 'text',
          value: state.signitem.suppInfoUrl,
          setValue: value =>
            actions.editSignatory({ key: 'suppInfoUrl', value }),
          placeholder: 'No Data',
        },
        {
          label: 'First Published Date or blank if not publishing yet',
          type: 'text',
          value: state.signitem.firstPubDate,
          setValue: value =>
            actions.editSignatory({ key: 'firstPubDate', value }),
          placeholder: '01/01/1993',
        },
      ],
    },
  };

  return (
    <SignatoryLayout
      signitem={state.signitem}
      orgSignitem={state.orgSignitem}
      edit={props.history.location.pathname.indexOf('edit-signatory') !== -1}
      financial={inputCardData.financial}
      descriptive={inputCardData.descriptive}
      signatory={inputCardData.signatory}
      addSignatory={() => actions.addSignatory(props.history)}
      updateSignatory={() =>
        actions.updateSignatory({
          history: props.history,
          _id: props.match.params.id,
        })
      }
      discardChanges={actions.discardChanges}
      deleteSignatory={() =>
        actions.deleteSignatory({
          history: props.history,
          _id: props.match.params.id,
        })
      }
    />
  );
}

export const Signatory = withRouter(SignatoryComp);
