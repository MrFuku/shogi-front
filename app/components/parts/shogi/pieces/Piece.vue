<template>
  <div :class="{red: placementable}">
    <img
      draggable
      @dragstart="dragStart([y, x])"
      @drop="dropped([y, x])"
      @dragover.prevent
      @dragenter.prevent
      :src="imgSrc"
    >
  </div>
</template>

<script>
const pieceTypes = [
  "Empty",
  "King",
  "Rock",
  "PromotedRock",
  "Bishop",
  "PromotedBishop",
  "Gold",
  "Silver",
  "PromotedSilver",
  "Knight",
  "PromotedKnight",
  "Lance",
  "PromotedLance",
  "Pawn",
  "PromotedPawn"
];

export default {
  props: {
    y: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    typeNumber: {
      type: Number,
      required: true
    },
    placementable: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    imgSrc() {
      if (this.typeNumber === 0) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
      } else {
        const type = pieceTypes[this.typeNumber];
        const fileName = type.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        return `/images/pieces/${fileName}.png`;
      }
    }
  },
  methods: {
    dragStart(dragPoint) {
      event.dataTransfer.setData("drag-point", dragPoint);
    },
    dropped(dropPoint) {
      const dragPoint = event.dataTransfer
        .getData("drag-point")
        .split(",")
        .map(x => parseInt(x));
      this.$emit("updated", dragPoint, dropPoint);
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}

div.red {
  background-color: rgb(218, 68, 68);
}

img {
  height: 50px;
}
</style>
