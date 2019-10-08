export type CCTRIModel = {
  titleValue: string;
  setTitleValue: Function;
  summaryValue: string;
  setSummaryValue: Function;
  bodyValue: string;
  setBodyValue: Function;
  areChanges: boolean;
  discardChanges(): void;
  saveChanges(): void;
};
