import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { SignatoryProgressLayout } from './layout';
/* store */
import { signatoryProgressStore } from './store';
/* utils */
import isEqual from 'lodash/isEqual';

function SignatoryProgressPage() {
  const today = new Date();
  const [state, actions] = signatoryProgressStore();
  const [localSignatoryProgress, setLocalSignatoryProgress] = React.useState({
    _id: '',
    firstDate: '',
    secondDate: '',
    thirdDate: '',

    totalSigFirstDate: '',
    totalSigSecondDate: '',
    totalSigThirdDate: '',

    publishingOpenDataIATIFirstDate: '',
    publishingOpenDataIATISecondDate: '',
    publishingOpenDataIATIThirdDate: '',

    publishingHumanitarianActivitiesFirstDate: '',
    publishingHumanitarianActivitiesSecondDate: '',
    publishingHumanitarianActivitiesThirdDate: '',

    using202OrLaterFirstDate: '',
    using202OrLaterSecondDate: '',
    using202OrLaterThirdDate: '',

    providingGranular202DataFirstDate: '',
    providingGranular202DataSecondDate: '',
    providingGranular202DataThirdDate: '',
  });

  React.useEffect(() => {
    actions.getSignatoryProgress();
  }, []);

  React.useEffect(() => {
    setLocalSignatoryProgress({
      _id: state.SignatoryProgress._id as string,
      firstDate: state.SignatoryProgress.firstDate,
      secondDate: state.SignatoryProgress.secondDate,
      thirdDate: state.SignatoryProgress.thirdDate,

      totalSigFirstDate: state.SignatoryProgress.totalSigFirstDate,
      totalSigSecondDate: state.SignatoryProgress.totalSigSecondDate,
      totalSigThirdDate: state.SignatoryProgress.totalSigThirdDate,

      publishingOpenDataIATIFirstDate:
        state.SignatoryProgress.publishingOpenDataIATIFirstDate,
      publishingOpenDataIATISecondDate:
        state.SignatoryProgress.publishingOpenDataIATISecondDate,
      publishingOpenDataIATIThirdDate:
        state.SignatoryProgress.publishingOpenDataIATIThirdDate,

      publishingHumanitarianActivitiesFirstDate:
        state.SignatoryProgress.publishingHumanitarianActivitiesFirstDate,
      publishingHumanitarianActivitiesSecondDate:
        state.SignatoryProgress.publishingHumanitarianActivitiesSecondDate,
      publishingHumanitarianActivitiesThirdDate:
        state.SignatoryProgress.publishingHumanitarianActivitiesThirdDate,

      using202OrLaterFirstDate:
        state.SignatoryProgress.using202OrLaterFirstDate,
      using202OrLaterSecondDate:
        state.SignatoryProgress.using202OrLaterSecondDate,
      using202OrLaterThirdDate:
        state.SignatoryProgress.using202OrLaterThirdDate,

      providingGranular202DataFirstDate:
        state.SignatoryProgress.providingGranular202DataFirstDate,
      providingGranular202DataSecondDate:
        state.SignatoryProgress.providingGranular202DataSecondDate,
      providingGranular202DataThirdDate:
        state.SignatoryProgress.providingGranular202DataThirdDate,
    });
  }, [state.SignatoryProgress]);

  return (
    <SignatoryProgressLayout
      firstDate={localSignatoryProgress.firstDate}
      setFirstDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          firstDate: value,
        })
      }
      secondDate={localSignatoryProgress.secondDate}
      setSecondDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          secondDate: value,
        })
      }
      thirdDate={localSignatoryProgress.thirdDate}
      setThirdDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          thirdDate: value,
        })
      }
      totalSigFirstDate={localSignatoryProgress.totalSigFirstDate}
      setTotalSigFirstDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigFirstDate: value,
        })
      }
      totalSigSecondDate={localSignatoryProgress.totalSigSecondDate}
      setTotalSigSecondDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigSecondDate: value,
        })
      }
      totalSigThirdDate={localSignatoryProgress.totalSigThirdDate}
      setTotalSigThirdDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigThirdDate: value,
        })
      }
      publishingOpenDataIATIFirstDate={
        localSignatoryProgress.publishingOpenDataIATIFirstDate
      }
      setPublishingOpenDataIATIFirstDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingOpenDataIATIFirstDate: value,
        })
      }
      publishingOpenDataIATISecondDate={
        localSignatoryProgress.publishingOpenDataIATISecondDate
      }
      setPublishingOpenDataIATISecondDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingOpenDataIATISecondDate: value,
        })
      }
      publishingOpenDataIATIThirdDate={
        localSignatoryProgress.publishingOpenDataIATIThirdDate
      }
      setPublishingOpenDataIATIThirdDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingOpenDataIATIThirdDate: value,
        })
      }
      publishingHumanitarianActivitiesFirstDate={
        localSignatoryProgress.publishingHumanitarianActivitiesFirstDate
      }
      setPublishingHumanitarianActivitiesFirstDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingHumanitarianActivitiesFirstDate: value,
        })
      }
      publishingHumanitarianActivitiesSecondDate={
        localSignatoryProgress.publishingHumanitarianActivitiesSecondDate
      }
      setPublishingHumanitarianActivitiesSecondDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingHumanitarianActivitiesSecondDate: value,
        })
      }
      publishingHumanitarianActivitiesThirdDate={
        localSignatoryProgress.publishingHumanitarianActivitiesThirdDate
      }
      setPublishingHumanitarianActivitiesThirdDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingHumanitarianActivitiesThirdDate: value,
        })
      }
      using202OrLaterFirstDate={localSignatoryProgress.using202OrLaterFirstDate}
      setUsing202OrLaterFirstDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          using202OrLaterFirstDate: value,
        })
      }
      using202OrLaterSecondDate={
        localSignatoryProgress.using202OrLaterSecondDate
      }
      setUsing202OrLaterSecondDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          using202OrLaterSecondDate: value,
        })
      }
      using202OrLaterThirdDate={localSignatoryProgress.using202OrLaterThirdDate}
      setUsing202OrLaterThirdDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          using202OrLaterThirdDate: value,
        })
      }
      providingGranular202DataFirstDate={
        localSignatoryProgress.providingGranular202DataFirstDate
      }
      setProvidingGranular202DataFirstDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          providingGranular202DataFirstDate: value,
        })
      }
      providingGranular202DataSecondDate={
        localSignatoryProgress.providingGranular202DataSecondDate
      }
      setProvidingGranular202DataSecondDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          providingGranular202DataSecondDate: value,
        })
      }
      providingGranular202DataThirdDate={
        localSignatoryProgress.providingGranular202DataThirdDate
      }
      setProvidingGranular202DataThirdDate={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          providingGranular202DataThirdDate: value,
        })
      }
      areChanges={!isEqual(localSignatoryProgress, state.SignatoryProgress)}
      discardChanges={() =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          firstDate: state.SignatoryProgress.firstDate as string,
          secondDate: state.SignatoryProgress.secondDate as string,
          thirdDate: state.SignatoryProgress.thirdDate as string,
          totalSigFirstDate: state.SignatoryProgress
            .totalSigFirstDate as string,
          totalSigSecondDate: state.SignatoryProgress
            .totalSigSecondDate as string,
          totalSigThirdDate: state.SignatoryProgress
            .totalSigThirdDate as string,

          publishingOpenDataIATIFirstDate: state.SignatoryProgress
            .publishingOpenDataIATIFirstDate as string,
          publishingOpenDataIATISecondDate: state.SignatoryProgress
            .publishingOpenDataIATISecondDate as string,
          publishingOpenDataIATIThirdDate: state.SignatoryProgress
            .publishingOpenDataIATIThirdDate as string,

          publishingHumanitarianActivitiesFirstDate: state.SignatoryProgress
            .publishingHumanitarianActivitiesFirstDate as string,
          publishingHumanitarianActivitiesSecondDate: state.SignatoryProgress
            .publishingHumanitarianActivitiesSecondDate as string,
          publishingHumanitarianActivitiesThirdDate: state.SignatoryProgress
            .publishingHumanitarianActivitiesThirdDate as string,

          using202OrLaterFirstDate: state.SignatoryProgress
            .using202OrLaterFirstDate as string,
          using202OrLaterSecondDate: state.SignatoryProgress
            .using202OrLaterSecondDate as string,
          using202OrLaterThirdDate: state.SignatoryProgress
            .using202OrLaterThirdDate as string,

          providingGranular202DataFirstDate: state.SignatoryProgress
            .providingGranular202DataFirstDate as string,
          providingGranular202DataSecondDate: state.SignatoryProgress
            .providingGranular202DataSecondDate as string,
          providingGranular202DataThirdDate: state.SignatoryProgress
            .providingGranular202DataThirdDate as string,
        })
      }
      saveChanges={() => {
        if (
          new Date(localSignatoryProgress.firstDate) < today &&
          new Date(localSignatoryProgress.secondDate) < today &&
          new Date(localSignatoryProgress.thirdDate) < today
        ) {
          actions.editSignatoryProgress(localSignatoryProgress);
        } else {
          window.alert('selected dates must be earlier than today.');
        }
      }}
    />
  );
}
export const SignatoryProgress = withRouter(SignatoryProgressPage);
