export interface LoginInfo {
  userName: string;
  groupId: string;
}

export const createLoginInfo = (): LoginInfo => ({
  userName: "",
  groupId: "",
});

export interface User {
  name: string;
  connectionId: string;
}

export enum ChessPiece {
  pawn = "PAWN",
  rook = "ROOK",
  knight = "KNIGHT",
  bishop = "BISHOP",
  king = "KING",
  queen = "QUEEN",
}

export interface ChessField {
  occupant: ChessPiece | null;
}

export interface ChessGameState {
  board: ChessField[][];
  turn: number;
  player: string;
}

const outerMostColumns = [
  ChessPiece.rook,
  ChessPiece.knight,
  ChessPiece.bishop,
  ChessPiece.queen,
  ChessPiece.king,
  ChessPiece.bishop,
  ChessPiece.knight,
  ChessPiece.rook,
];

export const createStartChessGameState = (): ChessGameState => {
  const board: ChessField[][] = new Array(8);
  console.log(board);
  for (let c = 0; c < 8; c++) {
    board[c] = new Array<ChessField>(8);
    for (let r = 0; r < 8; r++) {
      if (c === 0 || c === 7) {
        board[c][r] = { occupant: outerMostColumns[r] };
      } else if (c === 1 || c === 6) {
        board[c][r] = { occupant: ChessPiece.pawn };
      } else {
        {
          board[c][r] = { occupant: null };
        }
      }
    }
  }
  return {
    board,
    turn: 0,
    player: "First Player",
  };
};
