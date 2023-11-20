import {AppRouter} from "routes";
import {Header} from "components/Layout/Header";
import {Footer} from "components/Layout/Footer";

import {accountAPI} from 'services/accountService';

function App() {
	accountAPI.useLoginQuery();

	return (
		<div className='App'>
			<Header/>
			<AppRouter/>
			<Footer/>
		</div>
	);
}

export default App;
