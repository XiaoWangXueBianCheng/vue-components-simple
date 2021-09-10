<template>
  <div>
    <div class="Dialog--title">
      <h4>Dialog title</h4>
      <div class="Dialog--closer"></div>
    </div>
    <div class="Dialog--body">Dialog body</div>
  </div>
</template>
<script>
export default {
  name: 'Dialog'
}
</script>
<style lang="scss">
.Dialog--title{
  color: $title-color;
}
.Dialog--body{
  padding: 40px;
}
.Dialog--closer{

}
</style>
