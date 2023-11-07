export type TBoardCell = {
  id: number;
  title: string;
  cost: number;
  image: string;
  index: number;
  type: CellTypeVariant;
}

export enum CellTypeVariant {

}


export type TBoardCellResponse = {
  TOP: TBoardCell[];
  BOTTOM: TBoardCell[];
  LEFT: TBoardCell[];
  RIGHT: TBoardCell[];
  CORNER: TBoardCell[];
}