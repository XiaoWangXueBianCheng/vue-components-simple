<template>
  <div id="app">
    <h4>
      <a href="#dialog"># Dialog</a>
    </h4>
    <Dialog id="dialog"></Dialog>
    <h4>
      <a href="#popover"># Popover</a>
    </h4>
    <Popover id="popover"></Popover>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $title-color;
  margin-top: 60px;
}
a {
  color: $link-color;
}
</style>
