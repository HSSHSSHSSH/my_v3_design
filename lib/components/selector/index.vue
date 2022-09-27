<template>
  <div class="selector">{{name}}</div>
</template>



<script setup> 
  const name = 'wawa蛙叫你'
</script>


<script>
export default {
  name: 'HSelector'
}
</script>

<style lang="scss" scoped>
  .selector {
    width: 300px;
    position: relative;
  }
</style>