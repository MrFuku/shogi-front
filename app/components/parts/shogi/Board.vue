<template>
  <div class="board">
    <table border="3">
      <tr
        v-for="(h, y) in hoge"
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
    size: 9,
    hoge: [
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
    updated(old, newv) {
      let movedPiece = this.hoge[old[0]][old[1]];
      this.hoge[newv[0]].splice(newv[1], 1, movedPiece);
      this.hoge[old[0]].splice(old[1], 1, 0);
      // this.hoge.splice(old[0], 1, tmpRow)
      console.log(this.hoge);
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

