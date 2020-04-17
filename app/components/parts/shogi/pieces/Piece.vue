<template>
  <div :class="{red: placementable}">
    <img
      draggable
      @dragstart="dragStart([y, x])"
      @drop="dropped([y, x])"
      @dragover.prevent
      @dragenter.prevent
      @mousedown="exploration([y, x])"
      @mouseup="putTableReset"
      :class="enemyClass"
      :src="imgSrc"
    >
  </div>
</template>

<script>
import boardCreatable from "~/components/mixin/boardCreatable.js";
import pieceMoveable from "~/components/mixin/pieceMoveable.js";

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
  mixins: [boardCreatable, pieceMoveable],
  props: {
    y: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    pieceObject: {
      type: Object,
      required: true
    },
    placementable: {
      type: Boolean,
      required: true
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
      return this.pieceObject.enemy ? 'enemy' : 'ally';
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
    },
    exploration(point) {
      let f = this.getExploration(this.pieceObject.type);
      let table = f(this.getZeroTable(), point);
      this.$emit("updatePutTable", table);
    },
    putTableReset() {
      this.$emit("updatePutTable", this.getZeroTable());
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
