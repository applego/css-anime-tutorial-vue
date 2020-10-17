<template>
  <div id="app">
    <button @click="play">Play</button>
    <kantigaDesigner
      ref="kantigaDesigner"
      :x="100"
      :y="300"
      :scaleX="0.5"
      :scaleY="0.5"
    ></kantigaDesigner>
  </div>
</template>

<script>
import KantigaDesigner from './components/KantigaDesigner.vue'
export default {
  name: 'app',
  components: {
    KantigaDesigner
  },
  methods: {
    async play () {
      const kantigaDesigner = this.$refs.kantigaDesigner
      await kantigaDesigner.jump(100, 1500)
      await kantigaDesigner.walk(100, 1200)
      await kantigaDesigner.walk(60, 600)
      await kantigaDesigner.walk(40, 400)
      await kantigaDesigner.jump(200, 2500)
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
body {
  position: relative;
  height: 100%;
  background: url("/img/grid.svg") repeat;
}
#app {
  margin: 0;
}
</style>
