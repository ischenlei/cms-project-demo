<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 300px; background-color:gainsboro;">
      <mt-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item.img" alt="暂无图片" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      swiper: []
    }
  },
  created() {
    this.$axios.get('swiper')
    .then(res => {
      this.swiper = res.data.message
    })
    .catch(err => {
      console.log('轮播图获取失败', err)
    })
  }
}
</script>

<style lang="css" scoped>
img {
  width: 100%;
  height: 300px;
}
</style>