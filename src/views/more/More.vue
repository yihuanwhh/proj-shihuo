<template>
  <div class="content">
    <div class="top">
      <ul>
        <router-link to="/more/login" tag="li" active-class="active">登录</router-link>
        <router-link to="/more/regis" tag="li" active-class="active">注册</router-link>
      </ul>
      <router-view></router-view>
    </div>
    <div class="cart">
       购物车
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.content
  height 100%
  padding-top 45px
  display flex
  flex-direction column
  .top
    width 100%
    height 6rem
    background #e6e6e6
    display flex
    flex-direction column
    //background url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png) top no-repeat
    ul
      margin-left 10px
      padding-top 10px
      li
        color #000
        font-size 16px
        &.active
          color #ff4338
  .cart
    flex 1
</style>
