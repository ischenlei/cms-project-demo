<template>
  <div id="app">
    <mt-header title="首页" fixed>
      <mt-button link="/" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view/>

    <!-- 底部导航栏-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img src="./assets/31shouye.svg" slot="icon" >
        首页
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img src="./assets/31gouwuche.svg" slot="icon" >
        购物车
      </mt-tab-item>
      <mt-tab-item id="find">
        <img src="./assets/shangyehuaquanqiu.svg" slot="icon" >
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
        <img src="./assets/31wode.svg" slot="icon" >
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

<style scoped>

</style>
