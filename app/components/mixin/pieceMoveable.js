export default {
  methods: {
    kingExploration(table, point) {
      this.goldExploration(table, point);
      this.silverExploration(table, point);
      return table;
    },
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
    goldExploration(table, point) {
      const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [0, -1],
        [1, 0],
      ];
      directions.forEach((dir) =>
        this.isPutDown(table, point[0] + dir[0], point[1] + dir[1])
      );
      return table;
    },
    silverExploration(table, point) {
      const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [1, 1],
        [1, -1],
      ];
      directions.forEach((dir) =>
        this.isPutDown(table, point[0] + dir[0], point[1] + dir[1])
      );
      return table;
    },
    knightExploration(table, point) {
      const directions = [
        [-2, -1],
        [-2, 1],
      ];
      directions.forEach((dir) =>
        this.isPutDown(table, point[0] + dir[0], point[1] + dir[1])
      );
      return table;
    },
    lanceExploration(table, point) {
      return this.repeat(table, point[0], point[1], [-1, 0]);
    },
    pawnExploration(table, point) {
      this.isPutDown(table, point[0] - 1, point[1]);
      return table;
    },
    getExploration(type) {
      switch (type) {
        case 1:
          return this.kingExploration;
        case 2:
          return this.rockExploration;
        case 4:
          return this.bishopExploration;
        case 6:
          return this.goldExploration;
        case 7:
          return this.silverExploration;
        case 9:
          return this.knightExploration;
        case 11:
          return this.lanceExploration;
        default:
          return this.pawnExploration;
      }
    },
    repeat(table, y, x, direction) {
      y += direction[0];
      x += direction[1];
      if (this.isPutDown(table, y, x)) {
        this.repeat(table, y, x, direction);
      }
      return table;
    },
    isPutDown(table, y, x) {
      if (this.isTableRange(y, x) === false) return false;
      table[y][x] = 1;
      return true;
    },
    isTableRange(y, x) {
      if (y < 0 || x < 0) return false;
      if (y > 8 || x > 8) return false;

      return true;
    },
  },
};
