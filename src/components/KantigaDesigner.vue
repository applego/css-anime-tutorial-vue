<template>
  <img
    class="tama-root"
    src="/img/kantigaDesigner.svg"
    alt="勘違いデザイナー"
    :style="{
      transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`
    }"
    @click="jump(50)"
  />
</template>

<style lang="scss" scoped>
.tama-root {
  position: absolute;
  left: 0;
  top: 0;
  margin: -200px auto auto -90px;
  // 削除:(動的に変更するため) transform: translate(200px, 100px);
  transform-origin: 90px 100%;
}
</style>
<script>
export default {
  name: 'KantigaDesigner',
  props: {
    x: { type: Number, default: 200 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 }
  },
  methods: {
    jump (height) {
      // todo この方法は単一責任に沿わない（warnが表示される)
      this.y -= height
    }
  }
}
</script>
