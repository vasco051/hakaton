// import AppRouter from 'routes/AppRouter';
import {Footer} from 'components/Layout/Footer/Footer.tsx';
import {Header} from 'components/Layout/Header/Header.tsx';

import {accountAPI} from 'services/accountService';
import PageWrapper from "./components/Layout/PageWrapper/PageWrapper.tsx";


function App() {
	accountAPI.useLoginQuery();
	// const location = useLocation();
	// const [ isVisibleFooter, setIsVisibleFooter ] = useState(false);
	// const [ isVisibleHeader, setIsVisibleHeader ] = useState(false);
	//
	// useEffect(() => {
	//   setIsVisibleHeader(location.pathname !== staticLinks.authorization && location.pathname !==
	//     staticLinks.registration);
	//   setIsVisibleFooter(location.pathname !== staticLinks.authorization && location.pathname !==
	//     staticLinks.registration && location.pathname !== staticLinks.room);
	// }, [ location ]);

	return (
		<div className='App'>
			<Header/>
			<PageWrapper>
				fjsd
			</PageWrapper>
			{/*<AppRouter/>*/}
			<Footer/>
		</div>
	);
}

export default App;
