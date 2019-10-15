/* core */
import React from 'react';
import deburr from 'lodash/deburr';
import { withRouter } from 'react-router-dom';
import { AddSignatoryLayout } from 'app/modules/AddSignatory/layout';
import { OptionType } from 'app/components/inputs/Autocomplete/model';

const suggestionsMock: OptionType[] = [
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
];

export function getSuggestions(value: string, suggestions: OptionType[]) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function AddSignatoryPage(props) {
  const [selectedActivity, setSelectedActivity] = React.useState('');
  const [suggestions, setSuggestions] = React.useState(suggestionsMock);

  const handleSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value, suggestionsMock));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  return (
    <AddSignatoryLayout
      suggestions={suggestions}
      selectedActivity={selectedActivity}
      handleGoBack={props.history.goBack}
      setSelectedActivity={setSelectedActivity}
      handleAddSignatory={() => console.log('added signatory')}
      handleSuggestionsClearRequested={handleSuggestionsClearRequested}
      handleSuggestionsFetchRequested={handleSuggestionsFetchRequested}
    />
  );
}

export const AddSignatory = withRouter(AddSignatoryPage);
