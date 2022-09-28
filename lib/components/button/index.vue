<template>
  <div class="container">
    <button class="h-button">
      <span><slot></slot></span>
    </button>
  </div>
</template>


<script setup> 

</script>


<script>
export default {
  name: 'hButton'
}
</script>

<style lang="scss" scoped>
.h-button {
  border: 0;
  padding: 14px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
}
</style>