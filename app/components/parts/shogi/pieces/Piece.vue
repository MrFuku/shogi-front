<template>
  <div>
    <img
      :class="enemyClass"
      :src="imgSrc"
      @mousedown="pickup"
      @mouseup="pickdown"
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
    pieceObject: {
      type: Object,
      required: true
    },
    pickupPieceId: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePickupId(pieceId) {
      this.$emit('pickup', pieceId);
    },
    pickup() {
      this.changePickupId(this.pieceObject.pieceId);
    },
    pickdown() {
      this.changePickupId(-1);
    }
  },
  computed: {
    imgSrc() {
      if (this.pieceObject.type === 0) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
      } else {
        const type = pieceTypes[this.pieceObject.type];
        const fileName = type.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        return `/images/pieces/${fileName}.png`;
      }
    },
    enemyClass() {
      return this.pieceObject.playerId == 2 ? "enemy" : "ally";
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

.enemy {
  transform: rotate(180deg);
}
</style>
