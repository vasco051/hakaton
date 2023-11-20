import {FC} from 'react';
import {Link} from "react-router-dom";
import clsx from 'clsx';

import {TLinkButtonProps} from './types.ts';

import styles from './styles.module.scss';

export const LinkButton: FC<TLinkButtonProps> = ({
                                                   theme = 'outlined',
                                                   className = '',
                                                   children,
                                                   ...props
                                                 }) => {
  const buttonStyle: string = clsx(styles.button, styles.defaultSize, {
    [className]: className,
    [styles.outlined]: theme === 'outlined',
    [styles.filled]: theme === 'filled',
  });

  return (
    <Link className={buttonStyle} {...props}>
      {children}
    </Link>
  );
};