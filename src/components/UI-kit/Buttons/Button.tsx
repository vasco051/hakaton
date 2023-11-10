import {FC} from 'react';
import clsx from 'clsx';

import {TButtonProps} from './types.ts';

import styles from './styles.module.scss';

export const Button: FC<TButtonProps> = ({
																					 theme = 'outlined',
																					 type = 'button',
																					 className = '',
																					 children,
																					 reference,
																					 ...props
																				 }) => {
	const buttonStyle: string = clsx(styles.button, styles.defaultSize, {
		[className]: className,
		[styles.outlined]: theme === 'outlined',
		[styles.filled]: theme === 'filled',
	});

	return (
		<button ref={reference} type={type} className={buttonStyle} {...props}>
			{children}
		</button>
	);
};