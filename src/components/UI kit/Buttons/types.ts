import { ButtonHTMLAttributes, LegacyRef } from 'react';
import { LinkProps } from 'react-router-dom';

type ThemeType =
  | 'outlined'
  | 'filled'
  | 'grey'
  | 'dark'
  | 'danger'
  | 'light'
  | 'borderless';

type ButtonType = 'button' | 'reset' | 'submit';

type SizeType = 'default' | 'small';

export interface IButtonStylesProps {
  theme?: ThemeType;
  size?: SizeType;
}

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IButtonStylesProps & {
    type?: ButtonType;
    reference?: LegacyRef<HTMLButtonElement>;
  };

export type TLinkButtonProps = LinkProps &
  IButtonStylesProps & {
    to: string;
    className?: string;
  };
