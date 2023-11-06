import { FC } from 'react';

import { CellVariant } from './types';


interface IBoardCellProps {
  variant: CellVariant,
  item: any
}

const BoardCell: FC<IBoardCellProps> = ({
  variant,
  item
}) => {

  if (variant === CellVariant.TOP) {
    return (
      <li>

      </li>
    );
  }

  if (variant === CellVariant.RIGHT) {
    return (
      <li>

      </li>
    );
  }

  if (variant === CellVariant.BOTTOM) {
    return (
      <li>

      </li>
    );
  }

  if (variant === CellVariant.LEFT) {
    return (
      <li>

      </li>
    );
  }

  if (variant === CellVariant.CORNER) {
    return (
      <li>

      </li>
    )
  }

  return null
};

export default BoardCell;