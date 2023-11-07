import  { FC } from 'react';
import clsx from 'clsx';

import { TextFieldProps } from './types.ts';

import styles from './styles.module.scss';

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  disabled,
  className = '',
  wrapperClassName = '',
  placeholder = ' ',
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
        type={"text"}
        disabled={disabled}
        placeholder={placeholder}
        className={textFieldStyle}
        {...props}
      />

    </div>
  );
};

export default TextField;
