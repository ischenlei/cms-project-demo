<template>
  <div id="app">
    <mt-header title="首页">
      <mt-button link="'/'" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>

    <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="首页">
        <img slot="icon" >
        首页
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" >
        购物车
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" >
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected: '首页'
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
