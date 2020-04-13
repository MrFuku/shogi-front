<template>
  <div>
    <img
      draggable
      v-show="hoge"
      @drop="dropList($event)"
      @dragover.prevent
      @dragenter.prevent
      src="~/assets/images/pieces/pawn.png"
    >
  </div>
</template>

<script>
export default {
  props: {
    y: null,
    x: null
  },
  methods: {
    dropList(event) {
      const dragIndex = event.dataTransfer.getData("piece-move");
      let oldx = dragIndex.split(",")[0];
      let oldy = dragIndex.split(",")[1];
      console.log(this.y, this.x);
      console.log(dragIndex);
      this.$emit("updated", [oldx, oldy], [this.y, this.x]);
    }
  },
  data() {
    return {
      hoge: true
    };
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
</style>
