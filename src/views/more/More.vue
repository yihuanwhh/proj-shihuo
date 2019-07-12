<template>
  <div class="content">
    <div class="top">
      <ul>
        <router-link to="/login" tag="li" active-class="active">登录</router-link>
        <router-link to="/regis" tag="li" active-class="active">注册</router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.content
  height 100%
  padding-top 45px
  .top
    width 100%
    height 4rem
    background url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png) top no-repeat
    ul
      margin-left 40px
      padding-top 40px
      li
        color #ffffff
        font-size 16px
</style>
