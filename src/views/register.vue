<template>
  <div>
      <login-Top middleTop='注册bilibili'>
          <div slot="right" @click="$router.push('/login')">切换到登录</div>
      </login-Top>
      <login-Text label='姓名' style="margin: 2vw 0" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res => model.name = res"></login-Text>
      <login-Text label='账号' placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username = res"></login-Text>
      <login-Text label='密码' placeholder="请输入密码" type='password' rule="^.{6,16}$" @inputChange="res => model.password = res"></login-Text>
      <loginBtn btntext="注册" @registerSubmit='registerSubmit'></loginBtn>
  </div>
</template>

<script>
import loginTop from '@/components/common/loginTop.vue'
import loginText from '@/components/common/loginText.vue'
import loginBtn from '@/components/common/loginBtn.vue'

export default {
  data () {
    return {
      model: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  components: {
    loginTop,
    loginText,
    loginBtn
  },
  methods: {
    async registerSubmit () {
      const rulg = /^.{6,16}$/
      if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
        // 通过正则校验 接口调用
        const res = await this.$http.post('/register', this.model)
        console.log(res)
        this.$msg.fail(res.data.msg)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.objtoken)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 1e3)
      } else {
        this.$msg.fail('注册失败')
      }
    }
  }
}
</script>

<style>
</style>
