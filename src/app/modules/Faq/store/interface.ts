import { Action, Thunk } from 'easy-peasy';
import { ErrorResponse } from 'app/state/api/interfaces';

export interface FaqItem {
  _id?: string;
  title: string;
  expl: string;
}

export interface ItemEditPayload extends FaqItem {
  index: number;
}

export interface FaqStoreModel {
  orgFaqItems: Array<FaqItem>;
  faqItems: Array<FaqItem>;
  error: string | null;
  setError: Action<FaqStoreModel, ErrorResponse>;
  setAllItems: Action<FaqStoreModel, Array<FaqItem>>;
  getAllItems: Thunk<FaqStoreModel>;
  addItem: Action<FaqStoreModel>;
  removeItem: Action<FaqStoreModel, number>;
  editItem: Action<FaqStoreModel, ItemEditPayload>;
  discardChanges: Action<FaqStoreModel>;
  saveChanges: Thunk<FaqStoreModel>;
}
