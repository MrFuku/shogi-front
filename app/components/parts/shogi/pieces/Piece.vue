<template>
  <div>
    <component
      :is="com"
      :y="y"
      :x="x"
      @updated="updated"
    />
  </div>
</template>

<script>
import Empty from "~/components/parts/shogi/pieces/Empty.vue";
import Pawn from "~/components/parts/shogi/pieces/Pawn.vue";
import PieceDraggable from "~/components/mixin/PieceDraggable.js";

export default {
  components: {
    Empty,
    Pawn
  },
  mixins: [PieceDraggable],
  props: ["y", "x", "type"],
  computed: {
    com() {
      return ["Empty", "Pawn"][this.type];
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}

img {
  height: 50px;
  opacity: 0;
}

.canPut {
  background-color: red;
}
</style>
