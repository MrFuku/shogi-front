<template>
  <div>
    <img
      draggable
      @dragstart="setDragPoint(y, x)"
      @dragover.prevent
      @dragenter.prevent
      src="~/assets/images/pieces/pawn.png"
    >
  </div>
</template>

<script>
import PieceDraggable from "~/components/mixin/PieceDraggable.js";

export default {
  props: {
    y: null,
    x: null
  },
  mixins: [PieceDraggable]
};
</script>

<style scoped>
div {
  text-align: center;
}

img {
  height: 50px;
}
</style>
