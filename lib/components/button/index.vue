<template>
<div :class="hClass">
  <button><slot></slot></button>
</div>
</template>


<script setup> 
import { computed } from '@vue/runtime-core'
const props = defineProps({
  type:{
    type: String,
    default: 'default'
  }
})
const hClass = computed(() => {
  return ["h-button",`h-button-${props.type}`]
})
</script>

<script>
export default {
    name: 'HButton'
}
</script>

<style lang="scss" scoped>
 button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
 }

 .h-button{
  button{
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #b4b0b0;
  }
 }

 .h-button-default{
  button {
    background: #b0b4b2;
  }
 }

 .h-button-success {
  button {
    background: #08e978
  }
 }
 .h-button-warning {
  button{
    background: #f9a825;
  }
 }
</style>