<template>
  <div id="home">
    <mt-swipe class="swipe" :auto="4000">
      <mt-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item.img" alt="暂无图片" />
      </mt-swipe-item>
    </mt-swipe>

    <div class="list">
      <div class="icon" v-for="item in iconList" :key="item.id" >
        <router-link :to="item.router">
          <img :src="item.img"  alt="暂无图片">
        </router-link>
        <p>{{ item.title }}</p>
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
        {id: 1, img: require('../../assets/优惠券.svg'), title: '优惠券', router: {name: ''}},
        {id: 2, img: require('../../assets/信用卡.svg'), title: '信用卡', router: {name: ''}},
        {id: 3, img: require('../../assets/商店.svg'), title: '商店', router: {name: ''}},
        {id: 4, img: require('../../assets/热卖.svg'), title: '热卖', router: {name: ''}},
        {id: 5, img: require('../../assets/礼物.svg'), title: '礼物', router: {name: 'news.list'}},
        {id: 6, img: require('../../assets/物流.svg'), title: '物流', router: {name: ''}},
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
.swipe {
  height: 200px;
}
.swipe img {
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
  text-align: center;
  font-size: 14px;
}
.icon a {
  display: inline-block;
  width: 60px;
  height: 60px;
}
.icon img {
  width: 60px;
  height: 60px;
}
</style>