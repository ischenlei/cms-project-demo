<template>
  <div id="news">
    <div class="news-list" v-for="item in newsList">
      <div class="news-img">
        <img :src="item.img" alt="">
      </div>
      <div class="news-right">
        <div class="news-title">
          {{item.title}}
        </div>
        <div class="news-content">
          {{item.content}}
        </div>
        <div class="news-time">
          {{item.add_time}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.$axios.get('news/list')
    .then(res => {
      // console.log(res.data)
      this.newsList = res.data.message
    })
    .catch(err => {
      console.log('获取数据失败', err)
    })
  }
}
</script>

<style scoped>
#news {
  padding-bottom: 120px;
}
.news-list {
  display: block;
  /*margin: 20px;*/
  padding: 10px;
  height: 150px;
  border-bottom: 1px solid gainsboro;
}
.news-img {
  display: inline-block;
  width: 150px;
  /*height: 150px;*/
  background-color: gainsboro;
}
.news-img img {
  width: 150px;
  height: 150px;
}
.news-right {
  display: inline-block;
  position: relative;
  width: 190px;
  height: 100%;
}
.news-title {
  position: absolute;
  left: 0;
  height: 20px;
}
.news-content {
  position: absolute;
  top: 30px;
  left: 0;
  height: 90px;
  overflow: hidden;
}
.news-time {
  position: absolute;
  bottom: 0;
  height: 20px;
}
</style>