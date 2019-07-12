<template>
  <div>
    <div class="search-select" style="visibility: visible; transform: none;">
      <ul id="select-index">
        <router-link to="/pagesearch/all" tag="li" active-class="active">
          全部
        </router-link>
        <router-link to="/pagesearch/goods" tag="li" active-class="active">
          商品
        </router-link>
        <router-link to="/pagesearch/youhui" tag="li" active-class="active">
          优惠
        </router-link>
        <router-link to="/pagesearch/share" tag="li" active-class="active">
          晒物
        </router-link>
      </ul>
    </div>
  </div>
</template>


<style lang="stylus" scoped>
.search-select
  position absolute
  width 100%
  height 1.2rem
  z-index 9
  ul
    display flex
    height 1.2rem
    border-bottom 1px solid #e6e6e6
    z-index 89
    position relative
    background #ffffff
    li
      width 25%
      line-height 1.2rem
      text-align center
      font-size .34667rem
      position relative
      &::before
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
      &::after
        content ""
        width 80%
        display block
        position absolute
        bottom 0
        left 10%
        height 1px
        background-color #ff4338
</style>
