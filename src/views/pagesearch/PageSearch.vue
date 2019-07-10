<template>
  <div class="mainBox">
    <div class="pageSearch-wraper">
      <div class="pageSearch">
        <div class="search-select" style="visibility: visible; transform: none;">
          <ul id="select-index">
            <li>
              <a href>全部</a>
            </li>
            <li>
              <a href>商品</a>
            </li>
            <li>
              <a href class="v-link-active">优惠</a>
            </li>
            <li>
              <a href>晒物</a>
            </li>
          </ul>
        </div>
        <div class="page-content">
          <div class="searchList page-route slide-transition">
            <div class="baicai_list">
              <p class="tit">
                <span> {{this.$route.query.keywords}} </span> 相关优惠券
              </p>
              <ul>
                <li v-for="value in this.data.data.baicai_list" :key="value.index" >
                  <a :href="value.href">
                    <div class="imgs">
                      <span class="get_imgs">
                        <img :src="value.img" />
                      </span>
                    </div>
                    <div class="price">
                      ￥{{value.price}}
                      <span class="quan">
                        券
                        <s>{{value.quan_price}}元</s>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <p class="more">
                <!-- <a class="lookmore" :href="('http://m.shihuo.cn/youhui/coupon_more?keywords=').concat(this.$route.query.keywords)">查看更多优惠券 &gt;</a> -->
                <a class="lookmore" :href="`http://m.shihuo.cn/youhui/coupon_more?keywords=${this.$route.query.keywords}`">查看更多优惠券 &gt;</a>
              </p>
            </div>
            <div class="list_news">
              <p class="tit">
                <span>篮球</span> 优惠信息
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
  },

  computed: {
    ...mapState(['data'])
  },
}
</script>

<style lang="stylus" scoped>
.mainBox
  height 100%
  overflow hidden
  .pageSearch-wraper
    height 100%
    .pageSearch
      position relative
      background #f0f3f5
      height 100%
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
            a
              display block
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
              &.v-link-active
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
      .page-content
        position relative
        height 100%
        .searchList
          padding 1.2rem 0
          background #f0f3f5
          position absolute
          top 0
          left 0
          width 100%
          height 100%  
          .baicai_list
            background #ffffff
            margin-bottom  .26667rem
            .tit
              min-height 1.0667rem
              line-height 1.0667rem
              font-size .4rem
              color #333
              padding-left .26667rem
              border-bottom 1px solid #e6e6e6
              span
                color #FF4338
            ul
              display flex
              padding .26667rem
              li
                width 33.3%
                padding .13333rem
                a
                  .imgs
                    width 100%
                    height 0
                    padding-bottom 100%
                    position relative
                    overflow hidden
                    img
                      width 100%
                      position absolute
                      //top 50%
                      left 0
                      display block
                  .price
                    margin-top .2rem
                    font-size .37333rem
                    color #ff4338
                    position relative
                    .quan
                      display inline-block
                      position absolute
                      right 0
                      bottom 2px
                      z-index 2
                      overflow hidden
                      border 1px solid #ff4338
                      border-radius 5px
                      color #ff4338
                      font-size .32rem                    
                      padding-left .10667rem
                      s
                        background #ff4338
                        color #ffffff
                        display inline-block
                        padding 0 .10667rem
            .more
              a
                display block
                height 1.06667rem
                line-height 1.06667rem
                font-size .32rem
                color #278ccf
                text-align center
                border-top 1px solid #e6e6e6
          .list_news
            margin-bottom .26667rem
            background #ffffff
            .tit
              height 1.2rem
              line-height 1.2rem
              font-size .4rem
              color #333
              padding-left .26667rem
              border-bottom 1px solid #e6e6e6
              span
                color #ff4338
            ul
              padding .26667rem
              li
                a
                  padding .26667rem
                  padding-left 0
                  border-bottom 1px solid #e6e6e6
                  display flex
                  .imgs
                    width 30%
                    float left
                    position relative
                    .get_imgs
                    height 0
                    width 100%
                    padding-bottom 100%
                    display block
                      img
                        width 100%
                  .details_box
                    width 60%
                    position relative
                    margin-left .26667rem
                    display flex
                    justify-content space-between
                    flex-direction column
                    h2
                      font-size .4rem
                      color #333
                      font-weight 400
                      line-height .53333rem
                      man-height 1.06667rem
                      overflow hidden
                    p
                      color #ff4338
                      font-size .4rem
                    .btm
                      color #999
                      font-size .32rem
                      width 100%
                      .bus
                        float left 
                        color #999
                        font-size .32rem
</style>

