<template>
  <div>
      <div class="loginTop">
          <div></div>
          <div>{{middleTop}}</div>
          <div><slot name="right"></slot></div>
      </div>
  </div>
</template>

<script>
export default {
  props: [
    'middleTop'
  ]
}
</script>

<style lang="less">
.loginTop{
    height: 16vw;
    background-color: white;
    display: flex;
    div{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.333vw;
    }
}
</style>
