import {InputHTMLAttributes} from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	wrapperClassName?: string;
	withError?: boolean
}