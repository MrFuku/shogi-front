export default {
  methods: {
    pawnExploration(table, point) {
      table[point[0] - 1][point[1]] = 1;
      return table;
    },
    getExploration(type) {
      return this.pawnExploration;
    },
    isTableRange(y, x) {
      if (y < 0 || x < 0) return false;
      if (y > 8 || x > 8) return false;

      return true;
    },
  },
};
