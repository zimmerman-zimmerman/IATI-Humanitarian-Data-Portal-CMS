import { Action, Thunk } from 'easy-peasy';

/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';

export interface SignatoryProgress {
  _id: string;
  firstDate: string;
  secondDate: string;
  thirdDate: string;

  totalSigFirstDate: string;
  totalSigSecondDate: string;
  totalSigThirdDate: string;

  publishingOpenDataIATIFirstDate: string;
  publishingOpenDataIATISecondDate: string;
  publishingOpenDataIATIThirdDate: string;

  publishingHumanitarianActivitiesFirstDate: string;
  publishingHumanitarianActivitiesSecondDate: string;
  publishingHumanitarianActivitiesThirdDate: string;

  using202OrLaterFirstDate: string;
  using202OrLaterSecondDate: string;
  using202OrLaterThirdDate: string;

  providingGranular202DataFirstDate: string;
  providingGranular202DataSecondDate: string;
  providingGranular202DataThirdDate: string;
}

export interface SignatoryProgressModel {
  SignatoryProgress: SignatoryProgress;
  error: string | null;
  setError: Action<SignatoryProgressModel, ErrorResponse>;
  setSignatoryProgress: Action<SignatoryProgressModel, SignatoryProgress>;
  getSignatoryProgress: Thunk<SignatoryProgressModel>;
  editSignatoryProgress: Thunk<SignatoryProgressModel, SignatoryProgress>;
}
