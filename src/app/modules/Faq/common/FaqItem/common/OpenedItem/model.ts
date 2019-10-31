import { FaqItem } from 'app/modules/Faq/store/interface';

export interface OpenedItModel extends FaqItem {
  index: number;
  editItem: Function;
}
