<template>
  <img
    class="kantiga-root"
    src="/img/kantigaDesigner.svg"
    alt="勘違いデザイナー"
    :style="{
      transform: `translate(${x + dx}px, ${y + dy}px) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`,
      transition: `transform ${duration}ms ${easing}`
    }"
    @click="jump(50)"
  />
</template>

<style lang="scss" scoped>
.kantiga-root {
  position: absolute;
  left: 0;
  top: 0;
  margin: -200px auto auto -90px;
  // 削除:(動的に変更するため) transform: translate(200px, 100px);
  transform-origin: 90px 100%;
  transition:  transform 1s ease;
  will-change: transform;
}
</style>
<script>
import Time from '@/core/Time'
export default {
  name: 'KantigaDesigner',
  props: {
    x: { type: Number, default: 200 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 }
  },
  data () {
    return {
      dx: 0,
      dy: 0,
      dScaleX: 1.0,
      dScaleY: 1.0,
      dRotate: 0,
      duration: 1000,
      easing: 'ease'
    }
  },
  methods: {
    async tween (props, duration = 1000) {
      Object.assign(this.$data, props)
      this.$data.duration = duration
      await Time.wait(duration)
    },
    async jump (height = 200, duration = 2500) {
      // todo この方法は単一責任に沿わない（warnが表示される)
      await this.tween({ dScaleY: 0.8, easing: 'ease' }, duration * 0.1)
      await this.tween({ dy: -height, dScaleY: 1.1, easing: 'ease-out' }, duration * 0.35)
      await this.tween({ dy: 0, dScale: 1.2, easing: 'ease-in' }, duration * 0.35)
      await this.tween({ dScaleY: 0.7, easing: 'ease' }, duration * 0.1)
      await this.tween({ dScaleY: 1.0, easing: 'ease' }, duration * 0.1)
    },
    async wait (step = 100, duration = 500) {
      await this.to({ dRotate: 10, dScaleY: 0.8, easing: 'ease' }, duration * 0.2)
      await this.to({ dx: this.dx + step, dy: -step * 0.2, dRotate: -5, dScaleY: 1.1, easing: 'cubic-bezier(.04,.67,.52,1)' }, duration * 0.7)
      await this.to
    }
  }
}
</script>
