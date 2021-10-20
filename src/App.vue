<template>
  <div id="app">
    <mt-header title="首页">
      <mt-button link="'/'" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view/>

    <!-- 底部导航栏-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" >
        首页
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" >
        购物车
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" >
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
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
      selected: 'home'
    }
  },
  watch: {
    selected() {
      this.$router.push({name: this.selected})
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
