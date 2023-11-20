import {FC, ReactNode} from 'react';
import {clsx} from "clsx";

import styles from './styles.module.scss'

interface IPageWrapper {
	children: ReactNode
	className?: string
}

export const PageWrapper: FC<IPageWrapper> = ({className = '', children}) => {
	const wrapperClasses = clsx(styles.pageWrapper, {
		[className]: !!className
	})

	return (
		<main className={wrapperClasses}>{children}</main>
	);
};