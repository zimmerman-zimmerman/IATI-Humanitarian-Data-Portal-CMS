import { OptionType } from 'app/components/inputs/Autocomplete/model';

export type AddSignatoryLayoutModel = {
  handleGoBack(): void;
  selectedActivity: string;
  suggestions: OptionType[];
  handleAddSignatory(): void;
  setSelectedActivity: Function;
  handleSuggestionsFetchRequested: Function;
  handleSuggestionsClearRequested: Function;
};
