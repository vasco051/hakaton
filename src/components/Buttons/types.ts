import { ButtonHTMLAttributes, LegacyRef } from 'react';
import { LinkProps } from 'react-router-dom';

type ThemeType =
  | 'filled'

type ButtonType = 'button' | 'reset' | 'submit';

export interface IButtonStylesProps {
  theme?: ThemeType;
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
