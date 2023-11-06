import { FC } from 'react';

import { CellVariant } from './types';

import styles from './styles.module.scss';

interface IBoardCellProps {
  variant: CellVariant,
  item: any
}

const BoardCell: FC<IBoardCellProps> = ({
  variant,
  item
}) => {
  return (
    <li className={styles.cell}>

    </li>
  );
};

export default BoardCell;