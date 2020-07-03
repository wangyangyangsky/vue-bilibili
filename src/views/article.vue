<template>
  <div v-if="model">
    <nav-bar></nav-bar>
    <div class="video">
      <video ref="bvideo" :src="model.content" controls="controls"></video>
      <div class="icon-play2 play"></div>
    </div>
    <div class="openapp">APP内打开，流畅又高清</div>
    <div class="title">
      <span>热门</span>
      <span>{{model.name}}</span>
    </div>
    <!-- <div class="videoInfo">
      <span>{{model.userinfo.name}}</span>
      <span>{{model.date}}</span>
      <div>未经作者授权禁止转载</div>
    </div> -->
    <div class="option">
      <p><span class="icon-star-full"></span><span>收藏</span></p>
      <p><span class="icon-box-add"></span><span>下载</span></p>
      <p><span class="icon-redo2"></span><span>分享</span></p>
    </div>
    <my-detail v-for="(item,index) in commendList" :detailitem="item" :key="index"></my-detail>
  </div>
</template>

<script>
import NavBar from '../components/common/navBar.vue'
import myDetail from '../components/home/detail.vue'
export default {
  data () {
    return {
      model: {},
      commendList: null
    }
  },
  components: {
    NavBar,
    myDetail
  },
  mounted () {
    this.articleItemData()
    console.log(this.$route)
    this.commendData()
  },
  methods: {
    async articleItemData () {
      // 取出路由地址中的参数
      const res = await this.$http.get('/article/' + this.$route.params.id)
      this.model = res.data[0]
      console.log(this.model)
    },
    async commendData () {
      const res = await this.$http.get('/commend')
      this.commendList = res.data
      console.log(this.commendList)
    }
  },
  watch: {
    $route () {
      console.log('路径变化了')
      this.commendData()
    }
  }
}
</script>

<style lang="less" scoped>
.video{
  width: 100%;
  height: 56.267vw;
  background: antiquewhite;
  position: relative;
  video{
    width: 100%;
    height: 100%;
  }
}
.openapp{
  height: 9.6vw;
  width: 93.6vw;
  line-height: 9.6vw;
  background: #fb7299;
  border: none;
  border-radius: 4.8vw;
  color: #fff;
  font-size: 3.73333vw;
  text-align: center;
  margin: 4vw auto 0;
}

.title{
  margin-top: 4vw;
  padding: 0 3.2vw;
  span:nth-child(1){
    font-size: 3.2vw;
    color: #fb7299;
    vertical-align: middle;
  }
  span:nth-child(2){
    vertical-align: middle;
    margin-left: 2.667vw;
  }
}

.option p{
  display: inline-block;
  margin-left: 2.667vw;
  span:nth-child(2){
    margin-left: 2.667vw;
  }
}

</style>
