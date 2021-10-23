<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 200px; background-color:gainsboro;">
      <mt-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item.img" alt="暂无图片" />
      </mt-swipe-item>
    </mt-swipe>

    <div class="list">
      <div v-for="item in iconList" :key="item.id" class="icon">
        <img :src="item.img"  alt="暂无图片">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      swiper: [],
      iconList: [
        {id: 1, img: require('../../assets/优惠券.svg')},
        {id: 2, img: require('../../assets/信用卡.svg')},
        {id: 3, img: require('../../assets/商店.svg')},
        {id: 4, img: require('../../assets/热卖.svg')},
        {id: 5, img: require('../../assets/礼物.svg')},
        {id: 6, img: require('../../assets/物流.svg')}
      ]
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
  height: 200px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
}
.icon {
  flex: 1;
  padding: 20px;
}
.icon img {
  width: 60px;
  height: 60px;
}
</style>