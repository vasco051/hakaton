import AppRouter from 'routes/AppRouter';

import { accountAPI } from 'services/accountService';

function App() {
  accountAPI.useLoginQuery();

  return (
    <AppRouter/>
  );
}

export default App;
