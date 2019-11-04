export type SignatoryProgressModel = {
  firstDate: string;
  setFirstDate: Function;
  secondDate: string;
  setSecondDate: Function;
  thirdDate: string;
  setThirdDate: Function;

  totalSigFirstDate: string;
  setTotalSigFirstDate: Function;
  totalSigSecondDate: string;
  setTotalSigSecondDate: Function;
  totalSigThirdDate: string;
  setTotalSigThirdDate: Function;

  publishingOpenDataIATIFirstDate: string;
  setPublishingOpenDataIATIFirstDate: Function;
  publishingOpenDataIATISecondDate: string;
  setPublishingOpenDataIATISecondDate: Function;
  publishingOpenDataIATIThirdDate: string;
  setPublishingOpenDataIATIThirdDate: Function;

  publishingHumanitarianActivitiesFirstDate: string;
  setPublishingHumanitarianActivitiesFirstDate: Function;
  publishingHumanitarianActivitiesSecondDate: string;
  setPublishingHumanitarianActivitiesSecondDate: Function;
  publishingHumanitarianActivitiesThirdDate: string;
  setPublishingHumanitarianActivitiesThirdDate: Function;

  using202OrLaterFirstDate: string;
  setUsing202OrLaterFirstDate: Function;
  using202OrLaterSecondDate: string;
  setUsing202OrLaterSecondDate: Function;
  using202OrLaterThirdDate: string;
  setUsing202OrLaterThirdDate: Function;

  providingGranular202DataFirstDate: string;
  setProvidingGranular202DataFirstDate: Function;
  providingGranular202DataSecondDate: string;
  setProvidingGranular202DataSecondDate: Function;
  providingGranular202DataThirdDate: string;
  setProvidingGranular202DataThirdDate: Function;

  areChanges: boolean;
  discardChanges(): void;
  saveChanges(): void;
};
