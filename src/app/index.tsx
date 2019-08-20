import React from 'react';
import Providers from 'app/Providers';
import Routes from 'app/Routes';
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
