import AppRouter from 'routes/AppRouter';

import { accountAPI } from 'services/accountService';
import Header from "./components/Layout/Header.tsx";
import {Footer} from "./components/Layout/Footer.tsx";
import {staticLinks} from "./routes/routingLinks.ts";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
  accountAPI.useLoginQuery();
    const location = useLocation();
    const [isVisibleFooter,setIsVisibleFooter] = useState(false)
    const [isVisibleHeader,setIsVisibleHeader] = useState(false)
    useEffect(()=>{
        setIsVisibleHeader( location.pathname !== staticLinks.authorization && location.pathname !== staticLinks.registration)
        setIsVisibleFooter(location.pathname !== staticLinks.authorization && location.pathname !== staticLinks.registration && location.pathname !== staticLinks.room)
    },[location])
  return (
      <>
          {isVisibleHeader && <Header/>}
             <AppRouter/>
          {isVisibleFooter && <Footer />}
      </>

  );
}

export default App;
