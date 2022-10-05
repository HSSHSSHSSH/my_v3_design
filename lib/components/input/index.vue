<template>
  <div class="h-input">
    <input type="text" :value="modelValue" @input="input">
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
const props = defineProps({
  modelValue: String || Number,
  val: String
})

onMounted(() => {
  console.log(props.modelValue);
})


const emit = defineEmits(['update:modelValue'])
const input = (e) => {
  emit('update:modelValue',e.target.value)
}

</script>

<script>
export default {
    name: 'hInput'
}
</script>

<style lang="scss" scoped>
.h-input{
  display: inline-block;
  min-width: 250px;
  input {
    outline: none;
    border: 1px solid $border;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: $color;
    border-radius: 4px;
    transition: all .2s ease;
    &:focus{
      border-color: $primary;
    }
  }
}
</style>