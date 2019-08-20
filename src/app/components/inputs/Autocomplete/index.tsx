/* core */
import React from 'react';
import theme from 'app/theme';
import deburr from 'lodash/deburr';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';

/* components */
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface OptionType {
  label: string;
  secondaryLabel: string;
}

const suggestions: OptionType[] = [
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
  { label: 'NL-KVK-27264198', secondaryLabel: 'Pub Name' },
];

function renderInputComponent(inputProps: any) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      variant="outlined"
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

const CustomMenuItem = styled(props => (
  <MenuItem {...props}>{props.children}</MenuItem>
))`
  && {
    display: flex;
    justify-content: space-between;

    > #menu-item-secondary-label {
      color: ${theme.palette.text.secondary};
    }
  }
`;

function renderSuggestion(
  suggestion: OptionType,
  { query, isHighlighted }: Autosuggest.RenderSuggestionParams
) {
  return (
    <CustomMenuItem selected={isHighlighted} component="div">
      <div>{suggestion.label}</div>
      <div id="menu-item-secondary-label">{suggestion.secondaryLabel}</div>
    </CustomMenuItem>
  );
}

function getSuggestions(value: string) {
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

function getSuggestionValue(suggestion: OptionType) {
  return suggestion.label;
}

const useStyles = makeStyles((muiTheme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '3rem',
    },
    container: {
      position: 'relative',
    },
    input: {
      backgroundColor: muiTheme.palette.grey[40],
    },
    label: {
      marginBottom: '0.5rem',
      color: muiTheme.palette.text.primary,
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      left: 0,
      right: 0,
    },
    suggestion: {
      display: 'block',
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    divider: {
      height: muiTheme.spacing(2),
    },
  })
);

export function Autocomplete() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [stateSuggestions, setSuggestions] = React.useState<OptionType[]>([]);

  const handleSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = () => (
    event: React.ChangeEvent<{}>,
    { newValue }: Autosuggest.ChangeEvent
  ) => {
    setSelectedValue(newValue);
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <div className={classes.root}>
      <InputLabel
        className={classes.label}
        shrink
        variant="standard"
        htmlFor="react-autosuggest-simple"
      >
        Search by IATI organisation reference
      </InputLabel>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: 'react-autosuggest-simple',
          placeholder: 'Eg. NL-KVK-27264198',
          value: selectedValue,
          onChange: handleChange(),
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
}
