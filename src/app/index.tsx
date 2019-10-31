import React from 'react';
import Providers from 'app/Providers';
import Routes from 'app/Routes';
import { NavSideBar } from 'app/components/navigation/NavSideBar';
import { PositionedSnackbar } from 'app/components/general/snackbar';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  return (
    <Providers>
      <PositionedSnackbar />
      <NavSideBar />
      <Routes />
    </Providers>
  );
}

export default App;
