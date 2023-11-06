import  { FC } from 'react';

import clsx from 'clsx';

import { TButtonProps } from './types.ts';

import styles from './Button.module.scss';

const Button: FC<TButtonProps> = ({
  theme = 'outlined',
  type = 'button',
  size = 'default',
  className = '',
  children,
  reference,
  ...props
}) => {
  const buttonStyle: string = clsx(styles.button, styles.defaultSize, {
    [className]: className,
    [styles.filled]: theme === 'filled',
    [styles.outlined]: theme === 'outlined',
    [styles.grey]: theme === 'grey',
    [styles.small]: size === 'small',
    [styles.dark]: theme === 'dark',
    [styles.danger]: theme === 'danger',
    [styles.light]: theme === 'light',
    [styles.borderless]: theme === 'borderless',
  });

  return (
    <button ref={reference} type={type} className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
