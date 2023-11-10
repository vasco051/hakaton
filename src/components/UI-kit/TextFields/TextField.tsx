import {FC} from 'react';
import clsx from 'clsx';

import {TextFieldProps} from './types.ts';

import styles from './styles.module.scss';

export const TextField: FC<TextFieldProps> = ({
																				 id,
																				 label,
																				 disabled,
																				 className = '',
																				 wrapperClassName = '',
																				 ...props
																			 }) => {

	const wrapperStyle = clsx(styles.wrapper, {
		[wrapperClassName]: !!wrapperClassName,
		[styles.disabled]: !!disabled,
	});

	const textFieldStyle = clsx(styles.input, {
		[className]: !!className,
	});

	return (
		<div className={wrapperStyle}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}

			<input
				id={id}
				disabled={disabled}
				className={textFieldStyle}
				{...props}
			/>

		</div>
	);
};