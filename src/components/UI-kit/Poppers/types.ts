import {ReactNode} from 'react';

export interface PortalProps {
	children?: ReactNode;
}

export interface PopupProps {
	isOpen?: boolean;
	onClose: () => void;
	className?: string;
	children?: ReactNode;
}
