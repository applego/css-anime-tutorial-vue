<template>
  <div id="app">
    <kantigaDesigner
      :x="300"
      :y="400"
      :scaleX="1.5"
      :scaleY="1.5"
      :rotate="45"
    ></kantigaDesigner>
  </div>
</template>

<script>
import KantigaDesigner from './components/KantigaDesigner.vue'
export default {
  name: 'app',
  components: {
    KantigaDesigner
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
