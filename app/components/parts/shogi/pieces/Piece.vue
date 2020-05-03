<template>
  <div :class="classObject">
    <img
      :src="imgSrc"
      @mousedown="pickup"
      @mouseup="pickdown"
      @dragend="pickdown"
      @drop="droped()"
      @dragover.prevent
      @dragenter.prevent
    >
  </div>
</template>

<script>
const pieceTypes = [
  "empty",
  "king",
  "rock",
  "promoted-rock",
  "bishop",
  "promoted-bishop",
  "gold",
  "silver",
  "promoted-silver",
  "knight",
  "promoted-knight",
  "lance",
  "promoted-lance",
  "pawn",
  "promoted-pawn"
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
      this.$emit("pickup", pieceId);
    },
    pickup() {
      this.changePickupId(this.pieceObject.pieceId);
    },
    pickdown() {
      this.changePickupId(-1);
    },
    droped() {
      if (!this.puttable) return

      const y = Math.floor(this.pieceObject.pieceId / 10);
      const x = this.pieceObject.pieceId % 10;
      this.$emit("move", y, x);
    }
  },
  computed: {
    imgSrc() {
      if (this.pieceObject.type === 0) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
      } else {
        const type = pieceTypes[this.pieceObject.type];
        return `/images/pieces/${type}.png`;
      }
    },
    classObject() {
      return {
        enemy: this.isEnemy,
        puttable: this.puttable
      };
    },
    isEnemy() {
      return this.pieceObject.playerId == 2;
    },
    puttable() {
      return this.pieceObject.puttableIds.includes(this.pickupPieceId);
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}

div.puttable {
  background-color: rgb(218, 68, 68);
}

img {
  height: 50px;
}

.enemy {
  transform: rotate(180deg);
}
</style>
