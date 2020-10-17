<template>
  <img
    class="tama-root"
    src="/img/kantigaDesigner.svg"
    alt="勘違いデザイナー"
    :style="{
      transform: `translate(${x}px, ${y}px)`
    }"
  />
</template>

<style lang="scss" scoped>
.tama-root {
  position: absolute;
  left: 0;
  top: 0;
  margin: -200px auto auto -90px;
  // 削除:(動的に変更するため) transform: translate(200px, 100px);
}
</style>
<script>
export default {
  name: 'KantigaDesigner',
  props: {
    x: { type: Number, default: 200 },
    y: { type: Number, default: 100 }
  }
}
</script>
