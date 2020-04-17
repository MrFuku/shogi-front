export default {
  methods: {
    getZeroTable() {
      let zeroTable = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      return zeroTable;
    },
    initBoard() {
      let board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [13, 13, 13, 13, 13, 13, 13, 13, 13],
        [0, 4, 0, 0, 0, 0, 0, 2, 0],
        [11, 9, 7, 6, 1, 6, 7, 9, 11],
      ];
      return this.convertPieceObject(board);
    },
    convertPieceObject(board) {
      return board.map((row, y) => {
        return row.map((sq, x) => {
          return this.create(sq, y, x);
        });
      });
    },
    create(pieceType, y, _) {
      return {
        type: pieceType,
        enemy: y < 3,
      };
    },
  },
};
