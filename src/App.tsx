import AppRouter from 'routes/AppRouter';

import { accountAPI } from 'services/accountService';
import Header from "./components/Layout/Header.tsx";

function App() {
  accountAPI.useLoginQuery();

  return (
    <>
      <Header/>
      <AppRouter/>
    </>
  );
}

export default App;
