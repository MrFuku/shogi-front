<template>
  <div>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=">
  </div>
</template>

<script>
export default {
  props: {
    y: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  height: 50px;
}
</style>
