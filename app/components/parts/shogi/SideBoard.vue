<template>
  <div class="side-board">
    <Piece
      v-for="(p, i) in pieces"
      :key="i"
      :pieceObject="p"
      :pickupPieceId="-1"
    />
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
      pieces: []
    };
  }
};
</script>

<style scoped>
.side-board {
  border: black 2px solid;
  background-color: #f9c270;
  height: 300px;
  width: 150px;
}

img.piece {
  height: 50px;
}
</style>
