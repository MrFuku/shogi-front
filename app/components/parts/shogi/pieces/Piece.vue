<template>
  <div>
    <img :src="imgSrc">
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
  }
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
