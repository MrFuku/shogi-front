<template>
  <div class="board">
    <table border="3">
      <tr v-for="y in size" :key="y">
        <td class="square" v-for="x in size" :key="x"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: 9
  }),
}
</script>

<style>
  table {
    border-collapse: collapse;
  }

  .square {
    height: 50px;
    width: 50px;
    border-width: 2px;
    background-color: #F9C270;
  }
</style>

