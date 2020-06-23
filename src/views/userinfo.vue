<template>
    <div class="userinfo">
      <navBar></navBar>
      <div class="mainInfo">
        <img src="@/assets/bannerTop_new.png" style="width:100%;height:34.667vw" alt="">
        <div class="userDetail">
          <img class="userLogo" src="@/assets/head_img.jpg" alt="">
          <div class="relation">
            <div class="num">
              <span class="">
                <span>111</span>
                <span>粉丝</span>
              </span>
              <span>
                <span>111</span>
                <span>关注</span>
              </span>
              <span>
                <span>111</span>
                <span>获赞</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <bFooter></bFooter>
    </div>
</template>
<script>
import navBar from '../components/common/navBar.vue'
import bFooter from '../components/common/footer.vue'

export default {
  components: {
    navBar,
    bFooter
  }
}
</script>

<style lang="less" scoped>
.userDetail{
  position: relative;
  .userLogo{
    width: 22.4vw;
    height: 22.4vw;
    border-radius: 11.2vw;
    z-index: 2;
    position: absolute;
    top: -2.6vw;
    left: 3.2vw;
  }
  .relation{
    width: 58.667vw;
    float: right;
    background: antiquewhite;
  }
}
</style>
