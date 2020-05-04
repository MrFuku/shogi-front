<template>
  <div class="board">
    <div class="ib-box">
      <SideBoard></SideBoard>
    </div>
    <div class="ib-box">
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
                :pieceObject="po"
                :pickupPieceId="pickupPieceId"
                @pickup="pickup"
                @move="move"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ib-box">
      <SideBoard></SideBoard>
    </div>
  </div>
</template>

<script>
import Piece from "~/components/parts/shogi/Pieces/Piece.vue";
import SideBoard from "~/components/parts/shogi/SideBoard.vue";

export default {
  components: {
    Piece,
    SideBoard
  },
  data() {
    return {
      shogiBoard: [],
      pickupPieceId: -1
    };
  },
  methods: {
    pickup(pieceId) {
      this.pickupPieceId = pieceId;
    },
    async move(y, x) {
      const url = "/table/move";
      const data = {
        table: this.shogiBoard,
        y,
        x,
        pieceId: this.pickupPieceId
      };
      const response = await this.$axios.$post(url, data);
      this.shogiBoard = response.table;
    },
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

.ib-box {
  display: inline-flex;
}
</style>

