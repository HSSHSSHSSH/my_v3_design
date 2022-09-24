<template>
  <div>
    <div>Main</div>
    <!-- <button @click="increment">setup state: {{state.count}}</button> -->
    <!-- <button @click="incDataCount">data count: {{count}}</button> -->
    <button @click="changeVal1">change val1</button>
    <button @click="changeVal2">change val2</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
   data() {
     return {
        count: 0
     }
   },
   methods: {
    incDataCount() {
        console.log('this.count',this.count);
        console.log('state',this.state);
        this.count ++
    }
   }
}
</script>

<script setup>
  import {ref, reactive, watch, watchEffect } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}

let val1 = ref(0)
let val2 = ref(100)

watchEffect(() => {
  val1.value++
  val2.value--
  console.log('val1',val1.value);
  console.log('val2',val2.value);
})

function changeVal1() {
  val1.value++
}
function changeVal2() {
  val2.value--
}

</script>


<style>

</style>