export type AutocompleteModel = {
  inputId: string;
  selectedValue: string;
  suggestions: OptionType[];
  handleSelectValue: Function;
  handleSuggestionsFetchRequested: Function;
  handleSuggestionsClearRequested: Function;
};

export type OptionType = {
  label: string;
  secondaryLabel: string;
};
