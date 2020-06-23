<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div>1</div>
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
    .logo{
      width: 32vw;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 80%;
      }
    }
    div:nth-child(3){
      img{
        width: 6.4vw;
      }
    }
    div:nth-child(2){
      // 自适应
      flex: 1;
      img{
        width: 6.4vw;
      }
    }
    div:nth-child(4){
      width: 21.33333vw;
      height: 6.4vw;
      background: #fb7299;
      border-radius: 0.53333vw;
      color: #fff;
      text-align: center;
      line-height: 6.4vw;
    }
  }

</style>
