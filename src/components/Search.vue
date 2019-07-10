<template>
  <div>
    <div class="search_bar">
      <form action id="searchBox" method="get">
        <div class="search_box">
          <div class="search">
            <span class="getdata" @click="search(keywords)"></span>
            <input type="text" class="input focus" name="keywords" v-model= "keywords" :keywords="keywords" placeholder="搜索商品，品牌"   id="searchVal" />
          </div>
          <div class="city-entry" @click="handleClick">
            <span class="city-name">{{city}}</span>
            <i class="city-entry-arrow"></i>
          </div>
          <a href="//m.shihuo.cn/user#qk=t_gr" class="me">
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png" alt />
          </a>
          <a href="javascript:void(0)" class="cancel"></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      data:{},
      keywords:''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
    handleClick() {
      this.$router.push('city')
    },
    async search(keywords) {
      this.data = {
        url:'/search',
        params:{
          type:'news',
          keywords:this.keywords
        }
      }
      await this.$store.dispatch('search',this.data)
      this.$router.push({
        name:'pagesearch',
        query:{
          keywords
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.search_bar
  width 100%
  background -webkit-linear-gradient(top,rgba(0,0,0,.4),transparent)
  position absolute
  top 0
  z-index 10
  form
    width 100%
    height 100%
    .search_box
      width 100%
      height 100%
      overflow hidden
      .search
        width 50%
        height 100%
        float left
        padding-left .26667rem
        .getdata
          position absolute
          top 10px
          z-index 100
          width .6rem
          height .6rem
          background #fff url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png) .13333rem center no-repeat
          background-size .34667rem
        .input
          width 100%
          height .82667rem
          border-radius .10667rem
          border 0
          font-size .32rem
          padding-left .6rem
          margin .2rem 0
      .city-entry
        width 35%
        float left
        color #000
        text-align center
        margin 10px 0
        .city-name
          font-size 16px
          height 100%
        .city-entry-arrow
          margin-right 5px
          width 0
          height 0
          border 4px solid #b0b0b0
          border-left-color transparent
          border-right-color transparent
          border-bottom-color transparent
          display inline-block
          margin-left 4px
          margin-top 5px
      .me
        display block
        float right
        width 15%
        padding: 0 .2rem;
        padding-top: .2rem
        text-align center
        img
          width 70%
</style>

