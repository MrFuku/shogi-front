export default {
  methods: {
    pawnExploration(table, point) {
      table[point[0] - 1][point[1]] = 1;
      return table;
    },
    getExploration(type) {
      return this.pawnExploration;
    },
  },
};
