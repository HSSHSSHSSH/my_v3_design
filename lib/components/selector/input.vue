<template>
  <div class="selector-input">
    <label class="placeholder" for="input"></label>
    <input type="text" class="input">
    <span></span>
  </div>
</template>


<script setup lang="ts">
    defineProps({
        placeholder: {
            type: String,
            default: '请选择'
        }
    })
</script>

<script >
export default {
    name: 'SelectorInput'
}
</script>

<style lang="scss" scoped>
    .placeholder{
        color: red
    }
</style>