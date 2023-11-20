import {FC, forwardRef} from 'react';
import clsx from 'clsx';

import {TextFieldProps} from './types.ts';

import styles from './styles.module.scss';

export const TextField: FC<TextFieldProps> = forwardRef(({
                                                           id,
                                                           label,
                                                           withError,
                                                           disabled,
                                                           className = '',
                                                           wrapperClassName = '',
                                                           ...props
                                                         }, ref) => {
  const wrapperStyle = clsx(styles.wrapper, {
    [wrapperClassName]: !!wrapperClassName,
    [styles.disabled]: !!disabled,
  });

  const textFieldStyle = clsx(styles.input, {
    [className]: !!className,
    [styles.withError]: !!withError
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
        // @ts-ignore
        ref={ref}
        {...props}
      />

    </div>
  );
});