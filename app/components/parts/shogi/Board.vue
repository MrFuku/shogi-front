<template>
  <div class="board">
    <table border="3">
      <tbody>
        <tr
          v-for="(row, y) in shogiBoard"
          :key="y"
        >
          <td
            class="square"
            v-for="(po, x) in row"
            :key="x"
          >
            <Piece :pieceObject="po" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Piece from "~/components/parts/shogi/Pieces/Piece.vue";

export default {
  components: {
    Piece
  },
  data() {
    return {
      shogiBoard: []
    };
  },
  methods: {
    async init() {
      const url = "/table";
      const response = await this.$axios.$get(url);
      this.shogiBoard = response.table;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

.square {
  height: 50px;
  width: 50px;
  border-width: 2px;
  background-color: #f9c270;
}

.square:hover {
  background-color: rgb(207, 177, 131);
}
</style>

