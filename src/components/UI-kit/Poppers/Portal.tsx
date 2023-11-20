import {FC, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';

import {PortalProps} from './types';

const Portal: FC<PortalProps> = ({children}) => {
	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);
		return () => {
			document.body.removeChild(container);
		};
	}, []);

	return createPortal(children, container);
};

export default Portal;
