<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" color="#fb7299" swipeable>
      <van-tab v-for="(item,index) in category " :title="item.title" :key="index">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="我也是有底线的"
          @load="onLoad"
          :immediate-check="false"
        >
          <detail :detailitem="catrgoryitem" v-for="(catrgoryitem,caindex) in item.list" :key="caindex">
          </detail>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '../components/common/navBar.vue'
import detail from '../components/home/detail.vue'

export default {
  data () {
    return {
      category: [],
      active: 0,
      loading: false,
      finished: false
    }
  },
  components: {
    NavBar,
    detail
  },
  created () {
    this.selectCategory()
  },
  methods: {
    async selectCategory () {
      const res = await this.$http.get('/category')
      // this.category = res.data
      this.category = this.changeCategory(res.data)
      this.selectArticle()
    },
    changeCategory (data) {
      // 对后端传来数据进行改造
      const newcategory = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        item.finished = false
        item.loading = true
        return item
      })
      return newcategory
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
      // console.log(categoryitem)
      categoryitem.loading = false
      if (res.data.length < categoryitem.pagesize) {
        // 数据已经到底 下拉完成
        categoryitem.finished = true
      }
    },
    categoryItem () {
      const categoryitem = this.category[this.active]
      return categoryitem
    },
    onLoad () {
      const categoryitem = this.categoryItem()
      setTimeout(() => {
        categoryitem.page += 1
        this.selectArticle()
      }, 1e3)
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
