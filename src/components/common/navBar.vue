<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div>
      <a href="">
        <van-icon class="icon" name="search"/>
        <span>搜索感兴趣的东西找到你喜欢的</span>
      </a>
    </div>
    <div>
      <img src="@/assets/default_img.jpg" alt="">
    </div>
    <div>下载APP</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .navbar{
    height: 12.5vw;
    background: white;
    display: flex;
    align-items: center;
    .logo{
      width: 32vw;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 80%;
      }
    }
    div:nth-child(2){
      // 自适应
      flex: 1;
      a{
        display: inline-block;
        color: #999;
        width: 90%;
        background: #f4f4f4;
        height: 6.4vw;
        border-radius: 3.2vw;
        .icon{
          float: left;
          margin-top: 1.333vw;
          margin-left: 1.333vw;
        }
        span{
          width: 80%;
          font-size: 2.667vw;
          line-height: 6.4vw;
          display: inline-block;
          margin-left: 1.333vw;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    div:nth-child(3){
      img{
        width: 6.4vw;
        margin-top: 1vw;
        margin-right: 2.667vw;
        border-radius: 3.2vw;
      }
    }
    div:nth-child(4){
      width: 21.33333vw;
      height: 6.4vw;
      background: #fb7299;
      border-radius: 0.53333vw;
      color: #fff;
      text-align: center;
      font-size: 3.2vw;
      line-height: 6.4vw;
      margin-right: 2.667vw;
    }
  }

</style>
