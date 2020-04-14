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
            v-for="(sq, x) in row"
            :key="x"
          >
            <Piece
              :y="1"
              :x="1"
              :typeNumber="sq"
            />
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
      shogiBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [13, 13, 13, 13, 13, 13, 13, 13, 13],
        [0, 4, 0, 0, 0, 0, 0, 2, 0],
        [11, 9, 7, 6, 1, 6, 7, 9, 11]
      ]
    };
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

