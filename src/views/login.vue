<template>
  <div>
      <login-Top middleTop='注册bilibili'></login-Top>
      <login-Text style="margin:4vw 0" label='账号' placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username = res"></login-Text>
      <login-Text style="margin:4vw 0" label='密码' placeholder="请输入密码" type='password' rule="^.{6,16}$" @inputChange="res => model.password = res"></login-Text>
      <loginBtn btntext="登录" @registerSubmit='registerSubmit'></loginBtn>
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
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        // 通过正则校验 接口调用
        const res = await this.$http.post('/login', this.model)
        this.$toast.fail(res.data.msg)
        if (res.data.code === 301 || res.data.code === 302) {
          // 重定向
          return
        }
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.token)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 1e3)
      } else {
        this.$toast.fail('注册失败')
      }
    }
  }
}
</script>

<style>
</style>
