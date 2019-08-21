import { FaqItem } from './store/interface';

export interface FaqModel {
  faqItems: Array<FaqItem>;
  orgFaqItems: Array<FaqItem>;
  saveChanges: Function;
  discardChanges: Function;
  addItem: Function;
  removeItem: Function;
  editItem: Function;
}
