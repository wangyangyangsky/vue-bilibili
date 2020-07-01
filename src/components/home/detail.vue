<template>
  <div class="wrap" v-if="detailitem">
    <div class="detailItem">
      <div class="imgwrap">
        <img :src="detailitem.img" alt="">
      </div>
    </div>
    <p class="title">{{detailitem.name}}</p>
  </div>
</template>

<script>
export default {
  props: [
    'detailitem'
  ]
}
</script>

<style lang="less" scoped>
.wrap{
  width: 50%;
  float: left;
  margin-top: 0;
  .detailItem{
    width: 100%;
    padding: 2.13333vw 1.33333vw;
    display: inline-block;
    box-sizing: border-box;
    img{
      width: 45.867vw;
      height: 25.867vw;
      display: block;
    }
  }
  .title{
    font-size: 3.2vw;
    color: #212121;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
