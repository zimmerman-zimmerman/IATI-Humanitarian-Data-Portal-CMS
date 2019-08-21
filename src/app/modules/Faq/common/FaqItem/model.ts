import { FaqItem } from 'app/modules/Faq/store/interface';

export interface FaqItemModel extends FaqItem {
  index: number;
  removeItem: Function;
  editItem: Function;
  defOpen: boolean;
}
