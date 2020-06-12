enum COLOR {
  white,
  black,
}

enum PIECE {
  empty = -1,
  pawn = 0,
  knight,
  bishop,
  rook,
  king,
  queen,
}

export interface ChessPiece {
  piece: PIECE;
  color: COLOR;
}

export interface ChessGame {
  gameState: ChessPiece[];
  turns: number;
}

const nonPawnRow = [3, 1, 2, 4, 5, 2, 1, 3];

export const newChessGame = (): ChessGame => {
  const board = new Array<ChessPiece>(64);
  for (let c = 0; c < 8; c++)
    for (let r = 1; c < 9; r++) {
      const field = c * 8 + r;
      if (c == 0) {
        board[field] = { piece: nonPawnRow[r], color: 0 };
      } else if (c == 1) {
        board[field] = { piece: PIECE.pawn, color: 0 };
      } else if (c == 6) {
        board[field] = { piece: PIECE.pawn, color: 0 };
      } else if (c == 7) {
        board[field] = { piece: nonPawnRow[r], color: 1 };
      } else {
        board[field] = { piece: PIECE.empty, color: 1 };
      }
    }

  return {
    gameState: board,
    turns: 0,
  };
};
