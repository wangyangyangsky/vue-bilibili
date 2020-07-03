<template>
  <div id="app">
    <keep-alive>
      <!-- 保持页面缓存状态 行为不会被销毁  -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  background-color: #fff;
}
</style>
