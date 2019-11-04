import { action, createComponentStore, thunk } from 'easy-peasy';
import { cond } from 'space-api';

/* api */
import { db } from 'app/state/api/actionsReducers';

/* interfaces */
import { SignatoryProgress, SignatoryProgressModel } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

const signatoryProgress: SignatoryProgressModel = {
  SignatoryProgress: {
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
  },
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setSignatoryProgress: action((state, payload: SignatoryProgress) => {
    state.SignatoryProgress = payload;
  }),
  //getSignatoryProgress:thunk(async actions => {return(null)}),
  getSignatoryProgress: thunk(async actions => {
    const res = await db.get('signatoryProgress').apply();

    if (res.status === 200) {
      actions.setSignatoryProgress(res.data.result[0]);
    } else {
      actions.setError(res);
    }
  }),
  editSignatoryProgress: thunk(async (actions, payload: SignatoryProgress) => {
    db.updateOne('signatoryProgress')
      .where(cond('_id', '==', payload._id))
      .set({
        firstDate: payload.firstDate,
        secondDate: payload.secondDate,
        thirdDate: payload.thirdDate,

        totalSigJune2017: payload.totalSigFirstDate,
        totalSigMay2018: payload.totalSigSecondDate,
        totalSigMay2019: payload.totalSigThirdDate,

        publishingOpenDataIATIJune2017: payload.publishingOpenDataIATIFirstDate,
        publishingOpenDataIATIMay2018: payload.publishingOpenDataIATISecondDate,
        publishingOpenDataIATIMay2019: payload.publishingOpenDataIATIThirdDate,

        publishingHumanitarianActivitiesJune2017:
          payload.publishingHumanitarianActivitiesFirstDate,
        publishingHumanitarianActivitiesMay2018:
          payload.publishingHumanitarianActivitiesSecondDate,
        publishingHumanitarianActivitiesMay2019:
          payload.publishingHumanitarianActivitiesThirdDate,

        using202OrLaterJune2017: payload.using202OrLaterFirstDate,
        using202OrLaterMay2018: payload.using202OrLaterSecondDate,
        using202OrLaterMay2019: payload.using202OrLaterThirdDate,

        providingGranular202DataJune2017:
          payload.providingGranular202DataFirstDate,
        providingGranular202DataMay2018:
          payload.providingGranular202DataSecondDate,
        providingGranular202DataMay2019:
          payload.providingGranular202DataThirdDate,
      })
      .apply();
    actions.setSignatoryProgress(payload);
  }),
};

export const signatoryProgressStore = createComponentStore(signatoryProgress);
