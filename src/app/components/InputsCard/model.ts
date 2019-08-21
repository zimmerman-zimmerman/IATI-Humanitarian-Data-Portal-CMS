export interface OptionItem {
  value: string;
  label: string;
}

export interface InputItem {
  label: string;
  type: string;
  defValue?: string;
  setValue: Function;
  placeholder?: string;
  options?: Array<OptionItem>;
}

export interface InputsCardModel {
  titleInput?: InputItem;
  title?: string;
  data: Array<InputItem>;
}
