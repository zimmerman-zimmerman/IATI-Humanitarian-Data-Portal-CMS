import { AboutTextBlock } from './store/interface';

export type AboutLayoutModel = {
  textBlocks: AboutTextBlock[];
  setTextBlockFields: Function;
  areChanges: boolean;
  discardChanges(): void;
  saveChanges(): void;
};
