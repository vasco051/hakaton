import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AppRouter from 'routes/AppRouter';
import Header from 'components/Layout/Header.tsx';

import { accountAPI } from 'services/accountService';
import { staticLinks } from 'routes/routingLinks.ts';


function App() {
  accountAPI.useLoginQuery();
  const location = useLocation();
  const [ isVisibleFooter, setIsVisibleFooter ] = useState(false);
  const [ isVisibleHeader, setIsVisibleHeader ] = useState(false);
  useEffect(() => {
    setIsVisibleHeader(location.pathname !== staticLinks.authorization && location.pathname !==
      staticLinks.registration);
    setIsVisibleFooter(location.pathname !== staticLinks.authorization && location.pathname !==
      staticLinks.registration && location.pathname !== staticLinks.room);
  }, [ location ]);
  return (
    <>
      {isVisibleHeader && <Header/>}
      <AppRouter/>
      {isVisibleFooter && <Footer/>}
    </>

  );
}

export default App;
