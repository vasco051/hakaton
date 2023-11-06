import  { FC } from 'react';

import clsx from 'clsx';

import { TButtonProps } from './types.ts';

import styles from './Button.module.scss';

const Button: FC<TButtonProps> = ({
  theme = 'filled',
  type = 'button',
  className = '',
  children,
  reference,
  ...props
}) => {
  const buttonStyle: string = clsx(styles.button, styles.defaultSize, {
    [className]: className,
    [styles.filled]: theme === 'filled',
  });

  return (
    <button ref={reference} type={type} className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
