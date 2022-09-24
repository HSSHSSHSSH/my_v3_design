<template>
  <div id="app">
     <div v-if="!!obj.bar">bar存在</div>
     <div v-if="!obj.bar">bar不存在</div>
     <button @click="setBar">set bar</button>
     <button @click="deleteBar">delete bar</button>
  </div>
</template>

<script>
 
export default {
  name: 'App',
  data() {
    return {
      obj: {
        'foo': 'foo'
      }
    }
  },
  methods: { 
    setBar() {
      this.obj.bar = 'bar'
      console.log('set bar complete',!!this.obj.bar);
    },
    deleteBar() {
      delete this.obj.bar
      console.log('delete bar complete',!!this.obj.bar);
    }
  }
}
</script>

<style>

</style>
