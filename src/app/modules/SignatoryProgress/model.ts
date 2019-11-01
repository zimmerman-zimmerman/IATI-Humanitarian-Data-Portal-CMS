export type SignatoryProgressModel = {
  firstDate: string;
  setFirstDate: Function;
  secondDate: string;
  setSecondDate: Function;
  thirdDate: string;
  setThirdDate: Function;

  totalSigJune2017: string;
  setTotalSigJune2017: Function;
  totalSigMay2018: string;
  setTotalSigMay2018: Function;
  totalSigMay2019: string;
  setTotalSigMay2019: Function;

  publishingOpenDataIATIJune2017: string;
  setPublishingOpenDataIATIJune2017: Function;
  publishingOpenDataIATIMay2018: string;
  setPublishingOpenDataIATIMay2018: Function;
  publishingOpenDataIATIMay2019: string;
  setPublishingOpenDataIATIMay2019: Function;

  publishingHumanitarianActivitiesJune2017: string;
  setPublishingHumanitarianActivitiesJune2017: Function;
  publishingHumanitarianActivitiesMay2018: string;
  setPublishingHumanitarianActivitiesMay2018: Function;
  publishingHumanitarianActivitiesMay2019: string;
  setPublishingHumanitarianActivitiesMay2019: Function;

  using202OrLaterJune2017: string;
  setUsing202OrLaterJune2017: Function;
  using202OrLaterMay2018: string;
  setUsing202OrLaterMay2018: Function;
  using202OrLaterMay2019: string;
  setUsing202OrLaterMay2019: Function;

  providingGranular202DataJune2017: string;
  setProvidingGranular202DataJune2017: Function;
  providingGranular202DataMay2018: string;
  setProvidingGranular202DataMay2018: Function;
  providingGranular202DataMay2019: string;
  setProvidingGranular202DataMay2019: Function;

  areChanges: boolean;
  discardChanges(): void;
  saveChanges(): void;
};
