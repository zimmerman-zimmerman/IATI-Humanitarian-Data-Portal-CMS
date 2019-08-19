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
      <Router>
        <Grid container direction="row" justify="flex-start">
          <NavSideBar />
          <Grid item xs={9} sm={10} md={10} lg={10} xl={10}>
            <Routes />
          </Grid>
        </Grid>
      </Router>
    </Providers>
  );
}

export default App;
