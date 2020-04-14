<template>
  <div class="board">
    <table border="3">
      <tr
        v-for="(h, y) in shogiBoard"
        :key="y"
      >
        <td
          class="square"
          v-for="(f, x) in h"
          :key="[y,x]"
        >
          <Piece
            :y="y"
            :x="x"
            :type="f"
            @updated="updated"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Piece from "~/components/parts/shogi/Pieces/Piece.vue";
export default {
  components: {
    Piece
  },
  data: () => ({
    shogiBoard: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  }),
  methods: {
    updated(dragPoint, dropPoint) {
      this.replacePiece(dragPoint, dropPoint);
    },
    replacePiece(dragPoint, dropPoint) {
      const dragPiece = this.shogiBoard[dragPoint[0]][dragPoint[1]];
      this.shogiBoard[dragPoint[0]].splice([dragPoint[1]], 1, 0);
      this.shogiBoard[dropPoint[0]].splice([dropPoint[1]], 1, dragPiece);
    }
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

