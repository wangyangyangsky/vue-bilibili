<template>
  <div><van-field v-model="content" :label="label" :type='type' :placeholder="placeholder" :rule='rule'/></div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  props: [
    'label',
    'type',
    'placeholder',
    'rule'
  ],
  methods: {
    handlerule () {
      const rule = new RegExp(this.rule)
      if (rule.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  },
  watch: {
    content () {
      this.handlerule()
    }
  }
}
</script>

<style>

</style>
