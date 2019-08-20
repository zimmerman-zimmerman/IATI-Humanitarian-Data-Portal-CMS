import React from 'react';
import deburr from 'lodash/deburr';
import { storiesOf } from '@storybook/react';

import { Autocomplete } from '.';
import Providers from 'app/Providers';

import { OptionType } from 'app/components/inputs/Autocomplete/model';

const suggestionsMock: OptionType[] = [
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
];

function getSuggestions(value: string, suggestions: OptionType[]) {
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

storiesOf('Select|Autocomplete', module).add('Autocomplete', () => {
  const [selectedActivity, setSelectedActivity] = React.useState('');
  const [suggestions, setSuggestions] = React.useState(suggestionsMock);
  const handleSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value, suggestionsMock));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  return (
    <div style={{ background: '#fff' }}>
      <Providers>
        <Autocomplete
          suggestions={suggestions}
          selectedValue={selectedActivity}
          inputId="react-autosuggest-simple"
          handleSelectValue={setSelectedActivity}
          handleSuggestionsFetchRequested={handleSuggestionsFetchRequested}
          handleSuggestionsClearRequested={handleSuggestionsClearRequested}
        />
      </Providers>
    </div>
  );
});
