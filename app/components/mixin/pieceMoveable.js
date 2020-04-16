export default {
  methods: {
    rockExploration(table, point) {
      const directions = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
      ];
      directions.forEach((dir) => this.repeat(table, point[0], point[1], dir));
      return table;
    },
    bishopExploration(table, point) {
      const directions = [
        [-1, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
      ];
      directions.forEach((dir) => this.repeat(table, point[0], point[1], dir));
      return table;
    },
    lanceExploration(table, point) {
      return this.repeat(table, point[0], point[1], [-1, 0]);
    },
    pawnExploration(table, point) {
      table[point[0] - 1][point[1]] = 1;
      return table;
    },
    getExploration(type) {
      switch (type) {
        case 2:
          return this.rockExploration;
        case 4:
          return this.bishopExploration;
        case 11:
          return this.lanceExploration;
        default:
          return this.pawnExploration;
      }
    },
    repeat(table, y, x, direction) {
      y += direction[0];
      x += direction[1];
      if (this.isTableRange(y, x)) {
        table[y][x] = 1;
        this.repeat(table, y, x, direction);
      }
      return table;
    },
    isTableRange(y, x) {
      if (y < 0 || x < 0) return false;
      if (y > 8 || x > 8) return false;

      return true;
    },
  },
};
