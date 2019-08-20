/* core */
import React from 'react';
import theme from 'app/theme';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';

/* components */
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AutocompleteModel,
  OptionType,
} from 'app/components/inputs/Autocomplete/model';

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

function getSuggestionValue(suggestion: OptionType) {
  return suggestion.label;
}

const useStyles = makeStyles((muiTheme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      marginBottom: '3rem',
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

export function Autocomplete(props: AutocompleteModel) {
  const classes = useStyles();

  const handleChange = () => (
    event: React.ChangeEvent<{}>,
    { newValue }: Autosuggest.ChangeEvent
  ) => {
    props.handleSelectValue(newValue);
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: props.suggestions,
    onSuggestionsFetchRequested: props.handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: props.handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <>
      <InputLabel
        shrink
        variant="standard"
        htmlFor={props.inputId}
        className={classes.label}
      >
        Search by IATI organisation reference
      </InputLabel>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: props.inputId,
          placeholder: 'Eg. NL-KVK-27264198',
          value: props.selectedValue,
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
    </>
  );
}
