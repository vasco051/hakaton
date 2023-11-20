import {FC} from 'react';
import clsx from 'clsx';

import Portal from '../Portal';
import {PopupProps} from '../types';

import styles from './Popup.module.scss';

const Popup: FC<PopupProps> = ({
                                 isOpen,
                                 onClose,
                                 children,
                                 className = '',
                                 ...props
                               }) => {
  if (isOpen) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflowY = 'unset';
  }

  if (!isOpen) {
    return null;
  }

  const contentClasses = clsx({
    [styles.content]: true,
    [className]: className,
  });

  return (
    <Portal>
      <div className={styles.popup} role="dialog">
        <div
          className={styles.overlay}
          role="button"
          tabIndex={0}
          onClick={onClose}
        >
          <div
            {...props}
            className={contentClasses}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
