<template>
  <div class="editWrapper">
    <nav-bar></nav-bar>
    <table class="edit">
      <tr>
        <td>头像</td>
        <td style="position:relative">
          <van-uploader class="uploader" preview-size="50px" :after-read="afterRead"/>
          <img v-if="model.user_img" :src="model.user_img" alt="">
          <img v-else class="logo" src="@/assets/default_img.jpg" alt="" v-cloak>
        </td>
      </tr>
      <tr>
        <td>昵称</td>
        <td @click="changeShow(1)">{{model.name}}</td>
      </tr>
      <tr>
        <td>UID</td>
        <td>{{model.id}}</td>
      </tr>
      <tr>
        <td>性别</td>
        <td @click="ashow = true" v-if = model.gender>{{model.gender}}</td>
        <td @click="ashow = true" v-else>保密</td>
      </tr>
      <tr>
        <td>出生日期</td>
        <td @click="cshow=true"></td>
      </tr>
      <tr>
        <td>个性签名</td>
        <td @click="changeShow(2)">{{model.user_desc}}</td>
      </tr>
    </table>

    <div class="option">
      <a @click="logout">退出登录</a>
      <a @click="$router.back()">返回空间</a>
    </div>

    <van-dialog v-model="show" title="请填入要修改的内容" show-cancel-button @confirm = "confirmClick">
      <van-field v-model="content" autofocus />
    </van-dialog>

    <van-action-sheet v-model="ashow" :actions="actions" @select="onSelect" />
    <van-calendar v-model="cshow" @confirm="onConfirm" />
  </div>
</template>

<script>
import NavBar from '../components/common/navBar.vue'
export default {
  data () {
    return {
      model: {},
      show: false,
      content: '',
      temp: 0,
      ashow: false,
      cshow: false,
      actions: [{ name: '男' }, { name: '女' }]
    }
  },
  components: {
    NavBar
  },
  created () {
    this.userInfoData()
  },
  methods: {
    async userInfoData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      this.model = res.data[0]
      console.log(this.model)
    },
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器
      const fromdata = new FormData()
      fromdata.append('file', file.file)
      const res = await this.$http.post('/upload', fromdata)
      console.log(res)
      this.model.user_img = res.data.url
      this.UserUpdate()
    },
    async UserUpdate () {
      const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
      console.log(res)
      if (res.data.code === 200) {
        this.$msg.fail('修改成功')
      }
    },
    changeShow (index) {
      this.show = true
      this.temp = index
      this.content = ''
    },
    confirmClick () {
      if (this.temp === 1) {
        this.model.username = this.content
      } else if (this.temp === 2) {
        this.model.user_desc = this.content
      }
      this.UserUpdate()
    },
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      this.ashow = false
      this.model.gender = item.name
      this.UserUpdate()
    },
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      this.cshow = false
      this.date = this.formatDate(date)
    },
    logout () {
      window.localStorage.clear()
    }
  }
}
</script>

<style lang="less" scoped>
[v-cloak]{
  display: none !important;
}
.editWrapper{
  width: 100%;
  .edit{
    width: 100%;
    margin-top: 3.2vw;
    background: #fff;
    border-collapse: collapse;
    tr{
      width: 100%;
      border-bottom: 1px solid #eee;
    }
    td:nth-child(1){
    padding-left: 3.2vw;
    text-align: left;
    }
    td:nth-child(2){
      padding-right: 3.2vw;
      text-align: right;
      max-width: 48vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.edit tr td{
  width: 50%;
  padding: 2.667vw 0;
  color: #505050;
  img{
    width: 12.26667vw;
    height: 12.26667vw;
    border-radius: 6.13333vw;
    vertical-align: middle;
    position: relative;
    z-index: 2;
  }
}

.uploader{
  position: absolute;
  opacity: 0;
  z-index: 3;
}

.option{
  text-align: center;
  background: #ffffff;
  margin-top: 5.33vw;
  a{
    display: block;
    text-align: center;
    color: #505050;
    text-decoration: none;
    background: #fff;
    font-size: 3.73333vw;
    padding: 2.67vw;
  }
  a:first-child{
    border-bottom: 1px solid #eee;;
  }
}

</style>
