/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

// export const putHorseIn = (x, y) => board.map((r, ri) => r.map((_, ci) => (x === ci && y === ri ? 1 : 0)));
export const handleMove = (array, x, y) => {
  array = array.map((r, ri) => r.map((_, ci) => (x === ci && y === ri ? 1 : 0)));
  for (let ri = 0; ri < array.length; ri++) {
    for (let ci = 0; ci < array.length; ci++) {
      if (array[ri][ci] === 1) {
        if ((ri - 2) >= 0 && (ci - 1) >= 0) array[ri - 2][ci - 1] = 2;
        if ((ri - 2) >= 0 && (ci + 1) <= 7) array[ri - 2][ci + 1] = 2;
        if ((ri - 1) >= 0 && (ci - 2) >= 0) array[ri - 1][ci - 2] = 2;
        if ((ri - 1) >= 0 && (ci + 2) <= 7) array[ri - 1][ci + 2] = 2;
        if ((ri + 1) <= 7 && (ci - 2) >= 0) array[ri + 1][ci - 2] = 2;
        if ((ri + 1) <= 7 && (ci + 2) <= 7) array[ri + 1][ci + 2] = 2;
        if ((ri + 2) <= 7 && (ci - 1) >= 0) array[ri + 2][ci - 1] = 2;
        if ((ri + 2) <= 7 && (ci + 1) <= 7) array[ri + 2][ci + 1] = 2;
      }
    }
  }
  return array;
};

export default {
  board,
  handleMove,
  // putHorseIn,
};
