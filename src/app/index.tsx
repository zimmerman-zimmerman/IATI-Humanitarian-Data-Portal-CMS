import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from 'app/Providers';
import Routes from 'app/Routes';
import { Grid } from '@material-ui/core';
import { NavSideBar } from 'app/components/navigation/NavSideBar';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  return (
    <Providers>
      <NavSideBar />
      <Routes />
    </Providers>
  );
}

export default App;
