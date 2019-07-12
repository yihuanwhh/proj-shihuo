<template>
  <div class="pageSearch">
    <!-- <div class="search_bar">
      <form action id="searchBox" method="get">
        <div class="search_box">
          <div class="search">
            <span class="getdata" @click="search"></span>
            <input type="text" class="input focus" name="keywords" v-model="keywords" placeholder="搜索商品，品牌"   id="searchVal" />
          </div>
        </div>
      </form>
    </div> -->
    
    <div class="search-select" style="visibility: visible; transform: none;">
      <ul id="select-index">
        <li class="white" ><a href="" style="font-size:25px">&lt;</a></li>
        <router-link to="/pagesearch/all" tag="li" active-class="active" class="hot-item"> 全部 </router-link>
        <router-link to="/pagesearch/goods" tag="li" active-class="active" class="hot-item"> 商品 </router-link>
        <router-link to="/pagesearch/youhui" tag="li" active-class="active" class="hot-item"> 优惠 </router-link>
        <router-link to="/pagesearch/share" tag="li" active-class="active" class="hot-item"> 晒物 </router-link>
      </ul>
    </div>
    <main>
      <router-view :keywords="keywords"></router-view>
    </main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Nav from './Nav'
import http from '../../utils/http'
export default {
  data() {
    return {
      keywords:'',
    }
  },
  created() {
    this.keywords = this.$route.query
  }
}
</script>

<style lang="stylus" scoped>
.pageSearch
  height 100%
  .search-select
    width 100%
    height 46px
    #select-index
      display flex
      height 1.2rem
      border-bottom 1px solid #e6e6e6
      z-index 89
      position relative
      background #ffffff
      .hot-item
        width 25%
        line-height 1.2rem
        text-align center
        font-size .34667rem
        position relative
        &:before
          content ""
          width 2px
          display block
          position absolute
          top .29333rem
          right -1px
          height .61333rem
          background-color #f0f0f0
        &.active
          color #ff4338
          &:after
            content ""
            width 80%
            display block
            position absolute
            bottom 0
            left 10%
            height 1px
            background-color #ff4338
  main
    height 93% 
</style>

