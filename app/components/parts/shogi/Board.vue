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
            <Piece
              :y="y"
              :x="x"
              :pieceObject="po"
              :placementable="canPutDown[y][x] === 1"
              @updated="updated"
              @updatePutTable="updatePutTable"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import boardCreatable from "~/components/mixin/boardCreatable.js";
import Piece from "~/components/parts/shogi/Pieces/Piece.vue";

export default {
  mixins: [boardCreatable],
  components: {
    Piece
  },
  data() {
    return {
      shogiBoard: this.initBoard(),
      canPutDown: this.getZeroTable()
    };
  },
  methods: {
    updated(dragPoint, dropPoint) {
      this.replacePiece(dragPoint, dropPoint);
    },
    replacePiece(dragPoint, dropPoint) {
      const c = this.canPutDown[dropPoint[0]][dropPoint[1]];
      this.canPutDown = this.getZeroTable();
      if (c === 0) return;

      const dragPiece = this.shogiBoard[dragPoint[0]][dragPoint[1]];
      this.shogiBoard[dragPoint[0]].splice([dragPoint[1]], 1, 0);
      this.shogiBoard[dropPoint[0]].splice([dropPoint[1]], 1, dragPiece);
    },
    updatePutTable(table) {
      this.canPutDown = table;
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

