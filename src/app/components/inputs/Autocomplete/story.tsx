import React from 'react';
import { storiesOf } from '@storybook/react';

import { Autocomplete } from '.';
import Providers from 'app/Providers';

import { OptionType } from 'app/components/inputs/Autocomplete/model';

import { getSuggestions } from 'app/modules/AddSignatory';

const suggestionsMock: OptionType[] = [
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
];

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
