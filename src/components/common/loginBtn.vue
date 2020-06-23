<template>
  <div class="loginbtn" @click="registerClick">{{btntext}}</div>
</template>

<script>
export default {
  props: [
    'btntext'
  ],
  methods: {
    registerClick () {
      this.$emit('registerSubmit')
    }
  }
}
</script>

<style>
.loginbtn{
    height: 8vw;
    text-align: center;
    line-height: 8vw;
    background: #ff9db5;
    color: white;
    border-radius: 4vw;
    font-size: 2.667vw;
    margin-top: 1.333vw;
}
</style>
