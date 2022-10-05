<template>
  <div class="container">
    <h-button disabled>默认按钮</h-button>
    <h-button type="primary" disabled>主要按钮</h-button>
    <h-button type="success" disabled>成功按钮</h-button>
    <h-button type="info" disabled>信息按钮</h-button>
    <h-button type="warning" disabled>警告按钮</h-button>
    <h-button type="danger" disabled>危险按钮</h-button>
  </div>
</template>

<script setup>
   
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        align-items: baseline;
    }
</style>