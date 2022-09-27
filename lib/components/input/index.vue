<template>
  <div>
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

</style>