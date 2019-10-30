import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { SignatoryProgressLayout } from './layout';
/* store */
import { signatoryProgressStore } from './store';
/* utils */
import isEqual from 'lodash/isEqual';

function SignatoryProgressPage() {
  const [state, actions] = signatoryProgressStore();
  const [localSignatoryProgress, setLocalSignatoryProgress] = React.useState({
    _id: '',
    totalSigJune2017: '',
    totalSigMay2018: '',
    totalSigMay2019: '',

    publishingOpenDataIATIJune2017: '',
    publishingOpenDataIATIMay2018: '',
    publishingOpenDataIATIMay2019: '',

    publishingHumanitarianActivitiesJune2017: '',
    publishingHumanitarianActivitiesMay2018: '',
    publishingHumanitarianActivitiesMay2019: '',

    using202OrLaterJune2017: '',
    using202OrLaterMay2018: '',
    using202OrLaterMay2019: '',

    providingGranular202DataJune2017: '',
    providingGranular202DataMay2018: '',
    providingGranular202DataMay2019: '',
  });

  React.useEffect(() => {
    actions.getSignatoryProgress();
  }, []);

  React.useEffect(() => {
    setLocalSignatoryProgress({
      _id: state.SignatoryProgress._id as string,
      totalSigJune2017: state.SignatoryProgress.totalSigJune2017,
      totalSigMay2018: state.SignatoryProgress.totalSigMay2018,
      totalSigMay2019: state.SignatoryProgress.totalSigMay2019,

      publishingOpenDataIATIJune2017:
        state.SignatoryProgress.publishingOpenDataIATIJune2017,
      publishingOpenDataIATIMay2018:
        state.SignatoryProgress.publishingOpenDataIATIMay2018,
      publishingOpenDataIATIMay2019:
        state.SignatoryProgress.publishingOpenDataIATIMay2019,

      publishingHumanitarianActivitiesJune2017:
        state.SignatoryProgress.publishingHumanitarianActivitiesJune2017,
      publishingHumanitarianActivitiesMay2018:
        state.SignatoryProgress.publishingHumanitarianActivitiesMay2018,
      publishingHumanitarianActivitiesMay2019:
        state.SignatoryProgress.publishingHumanitarianActivitiesMay2019,

      using202OrLaterJune2017: state.SignatoryProgress.using202OrLaterJune2017,
      using202OrLaterMay2018: state.SignatoryProgress.using202OrLaterMay2018,
      using202OrLaterMay2019: state.SignatoryProgress.using202OrLaterMay2019,

      providingGranular202DataJune2017:
        state.SignatoryProgress.providingGranular202DataJune2017,
      providingGranular202DataMay2018:
        state.SignatoryProgress.providingGranular202DataMay2018,
      providingGranular202DataMay2019:
        state.SignatoryProgress.providingGranular202DataMay2019,
    });
  }, [state.SignatoryProgress]);

  return (
    <SignatoryProgressLayout
      totalSigJune2017={localSignatoryProgress.totalSigJune2017}
      setTotalSigJune2017={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigJune2017: value,
        })
      }
      totalSigMay2018={localSignatoryProgress.totalSigMay2018}
      setTotalSigMay2018={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigMay2018: value,
        })
      }
      totalSigMay2019={localSignatoryProgress.totalSigMay2018}
      setTotalSigMay2019={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigMay2019: value,
        })
      }
      publishingOpenDataIATIJune2017={
        localSignatoryProgress.publishingOpenDataIATIJune2017
      }
      setPublishingOpenDataIATIJune2017={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingOpenDataIATIJune2017: value,
        })
      }
      publishingOpenDataIATIMay2018={
        localSignatoryProgress.publishingOpenDataIATIMay2018
      }
      setPublishingOpenDataIATIMay2018={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingOpenDataIATIMay2018: value,
        })
      }
      publishingOpenDataIATIMay2019={
        localSignatoryProgress.publishingOpenDataIATIMay2019
      }
      setPublishingOpenDataIATIMay2019={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingOpenDataIATIMay2019: value,
        })
      }
      publishingHumanitarianActivitiesJune2017={
        localSignatoryProgress.publishingHumanitarianActivitiesJune2017
      }
      setPublishingHumanitarianActivitiesJune2017={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingHumanitarianActivitiesJune2017: value,
        })
      }
      publishingHumanitarianActivitiesMay2018={
        localSignatoryProgress.publishingHumanitarianActivitiesMay2018
      }
      setPublishingHumanitarianActivitiesMay2018={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingHumanitarianActivitiesMay2018: value,
        })
      }
      publishingHumanitarianActivitiesMay2019={
        localSignatoryProgress.publishingHumanitarianActivitiesMay2019
      }
      setPublishingHumanitarianActivitiesMay2019={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          publishingHumanitarianActivitiesMay2019: value,
        })
      }
      using202OrLaterJune2017={localSignatoryProgress.using202OrLaterJune2017}
      setUsing202OrLaterJune2017={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          using202OrLaterJune2017: value,
        })
      }
      using202OrLaterMay2018={localSignatoryProgress.using202OrLaterMay2018}
      setUsing202OrLaterMay2018={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          using202OrLaterMay2018: value,
        })
      }
      using202OrLaterMay2019={localSignatoryProgress.using202OrLaterMay2019}
      setUsing202OrLaterMay2019={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          using202OrLaterMay2019: value,
        })
      }
      providingGranular202DataJune2017={
        localSignatoryProgress.providingGranular202DataJune2017
      }
      setProvidingGranular202DataJune2017={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          providingGranular202DataJune2017: value,
        })
      }
      providingGranular202DataMay2018={
        localSignatoryProgress.providingGranular202DataMay2018
      }
      setProvidingGranular202DataMay2018={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          providingGranular202DataMay2018: value,
        })
      }
      providingGranular202DataMay2019={
        localSignatoryProgress.providingGranular202DataMay2019
      }
      setProvidingGranular202DataMay2019={value =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          providingGranular202DataMay2019: value,
        })
      }
      areChanges={!isEqual(localSignatoryProgress, state.SignatoryProgress)}
      discardChanges={() =>
        setLocalSignatoryProgress({
          ...localSignatoryProgress,
          totalSigJune2017: state.SignatoryProgress.totalSigJune2017 as string,
          totalSigMay2018: state.SignatoryProgress.totalSigMay2018 as string,
          totalSigMay2019: state.SignatoryProgress.totalSigMay2019 as string,

          publishingOpenDataIATIJune2017: state.SignatoryProgress
            .publishingOpenDataIATIJune2017 as string,
          publishingOpenDataIATIMay2018: state.SignatoryProgress
            .publishingOpenDataIATIMay2018 as string,
          publishingOpenDataIATIMay2019: state.SignatoryProgress
            .publishingOpenDataIATIMay2019 as string,

          publishingHumanitarianActivitiesJune2017: state.SignatoryProgress
            .publishingHumanitarianActivitiesJune2017 as string,
          publishingHumanitarianActivitiesMay2018: state.SignatoryProgress
            .publishingHumanitarianActivitiesMay2018 as string,
          publishingHumanitarianActivitiesMay2019: state.SignatoryProgress
            .publishingHumanitarianActivitiesMay2019 as string,

          using202OrLaterJune2017: state.SignatoryProgress
            .using202OrLaterJune2017 as string,
          using202OrLaterMay2018: state.SignatoryProgress
            .using202OrLaterMay2018 as string,
          using202OrLaterMay2019: state.SignatoryProgress
            .using202OrLaterMay2019 as string,

          providingGranular202DataJune2017: state.SignatoryProgress
            .providingGranular202DataJune2017 as string,
          providingGranular202DataMay2018: state.SignatoryProgress
            .providingGranular202DataMay2018 as string,
          providingGranular202DataMay2019: state.SignatoryProgress
            .providingGranular202DataMay2019 as string,
        })
      }
      saveChanges={() => actions.editSignatoryProgress(localSignatoryProgress)}
    />
  );
}
export const SignatoryProgress = withRouter(SignatoryProgressPage);
