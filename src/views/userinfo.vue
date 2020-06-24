<template>
    <div class="userinfo">
      <navBar></navBar>
      <div class="mainInfo">
        <img src="@/assets/bannerTop_new.png" style="width:100%;height:34.667vw" alt="">
      </div>
      <user-detail :userInfo="model"></user-detail>
    </div>
</template>
<script>
import navBar from '../components/common/navBar.vue'
// import bFooter from '../components/common/footer.vue'
import userDetail from '../components/userComponents/userDetail.vue'

export default {
  data () {
    return {
      model: {}
    }
  },
  components: {
    navBar,
    userDetail
  },
  created () {
    this.userInfoData()
  },
  methods: {
    async userInfoData () {
      console.log('进入页面')
      const res = await this.$http.get('/user/' + localStorage.getItem('id'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      console.log(res)
      this.model = res.data[0]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
