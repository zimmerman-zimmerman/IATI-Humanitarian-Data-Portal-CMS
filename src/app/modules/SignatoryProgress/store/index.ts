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

        totalSigFirstDate: payload.totalSigFirstDate,
        totalSigSecondDate: payload.totalSigSecondDate,
        totalSigThirdDate: payload.totalSigThirdDate,

        publishingOpenDataIATIFirstDate:
          payload.publishingOpenDataIATIFirstDate,
        publishingOpenDataIATISecondDate:
          payload.publishingOpenDataIATISecondDate,
        publishingOpenDataIATIThirdDate:
          payload.publishingOpenDataIATIThirdDate,

        publishingHumanitarianActivitiesFirstDate:
          payload.publishingHumanitarianActivitiesFirstDate,
        publishingHumanitarianActivitiesSecondDate:
          payload.publishingHumanitarianActivitiesSecondDate,
        publishingHumanitarianActivitiesThirdDate:
          payload.publishingHumanitarianActivitiesThirdDate,

        using202OrLaterFirstDate: payload.using202OrLaterFirstDate,
        using202OrLaterSecondDate: payload.using202OrLaterSecondDate,
        using202OrLaterThirdDate: payload.using202OrLaterThirdDate,

        providingGranular202DataFirstDate:
          payload.providingGranular202DataFirstDate,
        providingGranular202DataSecondDate:
          payload.providingGranular202DataSecondDate,
        providingGranular202DataThirdDate:
          payload.providingGranular202DataThirdDate,
      })
      .apply();
    actions.setSignatoryProgress(payload);
  }),
};

export const signatoryProgressStore = createComponentStore(signatoryProgress);
