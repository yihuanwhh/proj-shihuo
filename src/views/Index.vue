<template>
  <div class="mainBox">
    <Search></Search>
    <main>
      <router-view></router-view>
    </main>
    <nav>
      <ul>
        <router-link to="/home" tag="li" active-class="active">
          <span class="iconfont icon-home"></span>
          <b>首页</b>
        </router-link>
        <router-link to="/discount" tag="li" active-class="active">
          <span class="iconfont icon-discount"></span>
          <b>优惠</b>
        </router-link>
        <router-link to="/discovery" tag="li" active-class="active">
          <span class="iconfont icon-iconfontzhizuobiaozhun023103"></span>
          <b>发现</b>
        </router-link>
        <router-link to="/equip" tag="li" active-class="active">
          <span class="iconfont icon-sv"></span>
          <b>装备</b>
        </router-link>
        <router-link to="/more" tag="li" active-class="active">
          <span class="iconfont icon-more-br"></span>
          <b>更多</b>
        </router-link>
      </ul>
    </nav>
  </div> 
</template>

<script>
import Search from '../components/Search'
export default {
  components:{
    Search
  }
}
</script>

<style lang="stylus" >
//@import '~@/assets/styles/page.css'
.mainBox
  height 100%
  width 100%
  display flex
  flex-direction column
  main
    flex 1
    background #ffffff
    overflow scroll
  nav
    position relative
    z-index 1000
    height 1.2rem
    ul
      display flex
      height 100%
      li
        display flex
        flex 1
        flex-direction column
        align-items center
        justify-content center
        font-size .12rem        
        &.active
          color #FF4338
          a
            color #FF4338
        a
         align-items center
         font-size 14px
        span 
          font-size 20px
          
</style>
