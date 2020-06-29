<template>
  <div class="userDetail">
    <img v-if="userInfo.user_img" class="userLogo" :src="userInfo.user_img" alt />
    <img v-else class="userLogo" src="@/assets/head_img.jpg" alt />
    <div class="relation">
      <div class="num">
        <span class="focus">
          <span>111</span>
          <span>粉丝</span>
        </span>
        <span class="line"></span>
        <span class="focus">
          <span>111</span>
          <span>关注</span>
        </span>
        <span class="line"></span>
        <span class="focus">
          <span>111</span>
          <span>获赞</span>
        </span>
      </div>
      <button @click="$router.push('/edit')">编辑资料</button>
    </div>
    <div class="intro">
      <div class="base">
        <span>{{userInfo.name}}</span>
      </div>
      <span class="desc" v-if="userInfo.user_desc">{{userInfo.user_desc}}</span>
      <span class="desc" v-else>这个人很神秘，什么都没有写</span>
      <a class="packUp" @click="pack" :status="status">{{packStatus[status]}}</a>
      <span class="uid" v-show="status">uid:{{userInfo.id}}</span>
    </div>
    <div class="tabs">
      <span>动态</span>
      <span>视频</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      packStatus: ['展开', '收起'],
      status: 0,
      showEdit: 0
    }
  },
  props: [
    'userInfo'
  ],
  methods: {
    pack () {
      if (this.status === 0) {
        this.status = 1
      } else {
        this.status = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
button {
  outline: none;
  border: none;
}
.userDetail {
  position: relative;
  top: -10vw;
  z-index: 1;
  // height: 26.667vw;
  background: #ffffff;
  .userLogo {
    width: 22.4vw;
    height: 22.4vw;
    border-radius: 11.2vw;
    z-index: 2;
    position: absolute;
    top: -2.6vw;
    left: 3.2vw;
  }
  .relation {
    width: 58.667vw;
    float: right;
    margin-right: 2.667vw;
    .num {
      display: flex;
      flex: row;
      padding-top: 4vw;
      .focus {
        text-align: center;
        display: inline-block;
        width: 19.2vw;
        vertical-align: middle;
        span {
          width: 100%;
          display: inherit;
        }

        span:nth-child(1) {
          font-size: 3.467vw;
        }

        span:nth-child(2) {
          font-size: 2.667vw;
          color: #999;
        }
      }
      .line {
        vertical-align: middle;
        width: 1px;
        height: 4.26667vw;
        background: #e7e7e7;
        margin-top: 2.667vw;
      }
    }
    button {
      background: #fff;
      border: 1px solid #fb7299;
      color: #fb7299;
      width: 100%;
      display: block;
      text-align: center;
      height: 8vw;
      outline: none;
      font-size: 3.73vw;
      border-radius: 1.6vw;
      margin-top: 2.667vw;
    }
  }
  .intro {
    padding: 3.2vw;
    overflow: hidden;
    clear: both;
    .base span {
      font-size: 4.8vw;
      color: #212121;
      max-width: 62.66667vw;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
    .desc {
      margin-top: 2.13333vw;
      font-size: 3.46667vw;
      color: #999;
      line-height: 4.53333vw;
      width: 83.46667vw;
      overflow: hidden;
      text-overflow: ellipsis;
      float: left;
    }
    .packUp {
      margin-top: 1.86667vw;
      float: right;
      font-size: 3.46667vw;
      color: #1389bf;
    }
    .uid{
      display: inline-block;
      font-size: 3.73333vw;
      padding: 0.53333vw 1.33333vw;
      margin-right: -2.66667vw;
      color: #505050;
      background: #f4f4f4;
      border-radius: 0.53333vw;
      transform: scale(.71);
      -webkit-transform-origin: left;
      transform-origin: left;
      margin-top: 1.333vw;
    }
  }
  .tabs {
    height: 10.66667vw;
    line-height: 10.66667vw;
    padding-left: 3.2vw;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
    span {
      display: inline-block;
      margin-right: 8.53333vw;
      color: #757575;
      font-size: 3.46667vw;
    }
  }
}
</style>
