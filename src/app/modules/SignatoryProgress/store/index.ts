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
        totalSigJune2017: payload.totalSigJune2017,
        totalSigMay2018: payload.totalSigMay2018,
        totalSigMay2019: payload.totalSigMay2019,

        publishingOpenDataIATIJune2017: payload.publishingOpenDataIATIJune2017,
        publishingOpenDataIATIMay2018: payload.publishingOpenDataIATIMay2018,
        publishingOpenDataIATIMay2019: payload.publishingOpenDataIATIMay2019,

        publishingHumanitarianActivitiesJune2017:
          payload.publishingHumanitarianActivitiesJune2017,
        publishingHumanitarianActivitiesMay2018:
          payload.publishingHumanitarianActivitiesMay2018,
        publishingHumanitarianActivitiesMay2019:
          payload.publishingHumanitarianActivitiesMay2019,

        using202OrLaterJune2017: payload.using202OrLaterJune2017,
        using202OrLaterMay2018: payload.using202OrLaterMay2018,
        using202OrLaterMay2019: payload.using202OrLaterMay2019,

        providingGranular202DataJune2017:
          payload.providingGranular202DataJune2017,
        providingGranular202DataMay2018:
          payload.providingGranular202DataMay2018,
        providingGranular202DataMay2019:
          payload.providingGranular202DataMay2019,
      })
      .apply();
    actions.setSignatoryProgress(payload);
  }),
};

export const signatoryProgressStore = createComponentStore(signatoryProgress);
