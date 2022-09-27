<template>
  <div class="container">
    <div class="left-menu">
      <li @click="switchMenu(item,index)" :class="{active: activeIndex === index}" v-for="(item,index) in menu" :key="index">{{item.name}}</li>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>



<script setup>
import menus from '@/plugin/router/menu.js'
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
const router = useRouter()
const menu = menus[0].children

  let activeIndex = ref(0)
const switchMenu = (item,index) => {
  activeIndex.value = index
  router.push({
    path: item.path
  })
}
</script>


<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100vh;
  display: flex;
  .left-menu {
    width: 360px;
    height: auto;
    overflow-y: auto;
    border-right: 1px solid #f0f0f0;
    li{
      list-style: none;
      line-height: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      cursor: pointer;
    }
    li.active{
      border-right: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgba(14,128,235,0.1)
    }
  }
  .router-view{
    flex: 1;
    height: auto;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
}

</style>