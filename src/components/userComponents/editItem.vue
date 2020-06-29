<template>
  <div>
    <table>
      <tr>
        <td>头像</td>
        <td style="position:relative">
          <van-uploader class="uploader" preview-size="50px" :after-read="afterRead"/>
          <img v-if="model.user_img" :src="model.user_img"  class="logo"  alt="">
          <img v-else class="logo" src="@/assets/default_img.jpg" alt="" >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: [
    'model'
  ]
}
</script>

<style>

</style>
