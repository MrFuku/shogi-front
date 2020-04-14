export default {
  methods: {
    setDragPoint(y, x) {
      event.dataTransfer.setData("drag-point", [y, x]);
    },
    bePlaced(dropPoint) {
      const dragPoint = event.dataTransfer
        .getData("drag-point")
        .split(",")
        .map((x) => parseInt(x));
      this.$emit("updated", dragPoint, dropPoint);
    },
    updated(dragPoint, dropPoint) {
      this.$emit("updated", dragPoint, dropPoint);
    },
  },
};
