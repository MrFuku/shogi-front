<template>
  <div>
    <!-- <Pawn
      v-if="isPawn"
      :y="y"
      :x="x"
    />
    <Empty
      v-else
      :y="y"
      :x="x"
      @updated="updated"
    /> -->
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
export default {
  components: {
    Empty,
    Pawn
  },
  props: ["y", "x", "type"],
  methods: {
    dropList(event) {
      console.log("hosjfdskfj");
    },
    updated(old, newv) {
      console.log("hoge", old, newv);
      this.$emit("updated", old, newv);
    }
  },
  computed: {
    isPawn() {
      return this.type === 1;
    },
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
