<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" line-width="8vw" color="#fb7299">
      <van-tab v-for="(item,index) in category " :title="item.title" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '../components/common/navBar.vue'
export default {
  data () {
    return {
      category: [],
      active: 0
    }
  },
  components: {
    NavBar
  },
  created () {
    this.selectCategory()
  },
  methods: {
    async selectCategory () {
      const res = await this.$http.get('/category')
      // this.category = res.data
      console.log(res.data)
      this.changeCategory(res.data)
    },
    changeCategory (data) {
      const newcategory = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        return item
      })
      this.category = newcategory
    },
    async selectArticle () {
      const categoryitem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      })
      categoryitem.list.push(...res.data)
      // 查出相关联视频
      console.log(categoryitem)
    },
    categoryItem () {
      const categoryitem = this.category[this.active]
      return categoryitem
    }
  },
  watch: {
    active () {
      const categoryitem = this.categoryItem()
      if (!categoryitem.list.length) {
        this.selectArticle()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabs__line{
  background-color: #fb7299 !important;
}

</style>
