<template>
  <div>
    <li>
      <a class="link-a clearfix" :href="prod.data.href" >
        <div class="imgs">
          <span class="get_imgs">
            <img :src="prod.data.img" alt />
          </span>
        </div>
        <div class="details_box" v-if="prod.show_type === 'single2'">
          <h2>{{prod.data.title}}</h2>
          <div class="desc face">
            <span>
              <img class="lazy" :src="prod.data.avatar" />
            </span>
            {{prod.data.author_name}}
          </div>
          <div class="from">
            <div class="column_name">
              <span>{{prod.data.column_name}}</span>
            </div>
          </div>
        </div>
        <div class="details_box" v-if="prod.show_type === 'single3'">                 
          <h2>{{prod.data.title}}</h2>                 
          <p class="desc single3">                    
            <img src="../../picture/quote_left.png" alt="">
            {{prod.data.intro}}
            <img src="../../picture/quote_right.png" alt="">                 
          </p>                 
          <div class="from">                     
            <div class="price">淘宝&nbsp;<span>￥{{prod.data.price}}</span></div>                     
            <div class="guanzhu" v-if="prod.data.hits"><img src="../../picture/look.png" alt="">{{prod.data.hits}}</div>                 
          </div>             
        </div>
        <div class="details_box" v-if="prod.show_type === 'single1'">
				  <h2>{{prod.data.title}}</h2>
				  <p class="subtitle">{{prod.data.subtitle}}</p>
				  <div class="from">
					  <div class="column_name"> &nbsp;{{prod.data.merchant}} </div>
				  </div>
			  </div>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    prod: Object
  }
}
</script>


<style lang="stylus" scoped>
li
  a.link-a
    padding .26667rem
    padding-left 0
    border-bottom 1px solid #e6e6e6
    display flex
    .imgs 
      width 38%
      float left 
      position relative
      .get_imgs
        width 100%
        display block
        img 
          width 100%
    .details_box
      width 66%
      position relative
      margin-left .26667rem
      height 3rem
      display flex
      flex-direction column
      justify-content space-between
      h2
        font-size 14px
        color #333333
        font-weight 400
        max-height 1.12rem
        overflow hidden
        work-break break-all 
        line-height .56rem
      .desc.face
        bottom 1.0667rem
        font-size .34667rem
        color #666666
        span 
          display inline-block
          border-radius .266677rem
          width .53333rem
          height .53333rem
          overflow hidden
          text-align center
          vertical-align middle
          margin-right 10px
          img 
            width 100%
            display block
            margin 0
      .from
        font-size .34667rem
        color #a4a4a4
        width 100%
        bottom .06667rem
        left 0
        .column_name
          float left
          span 
            color #999999
            font-size .26667rem
            border 1px solid #a8a8a8
            border-radius .08rem
            padding 0 .13333rem
            display inline-block
            max-width 3rem
            overflow hidden
            vertical-align middle
            text-overflow ellipsis
            white-space nowrap
            margin-right .13333remli
      .subtitle
        bottom .8667rem
        left 0
        font-size .4rem
        color #ff4338
        line-height .53333rem
      .desc,.single3
        font-size .34667rem
        color #666
        img 
          width .24rem
          display inline-block
          margin 0 .13333rem
      .from
        .price
          float left
          color #999
          font-size .37333rem
          span
            color #FF4338
        .guanzhu
          float right
          text-align left
          img
            width .33333rem
            vertical-align middle
            margin-top -5px
            margin-right 10px
  a.link-a
    padding .26667rem
    padding-left 0
    border-bottom 1px solid #e6e6e6
    display flex
    .imgs 
      width 38%
      float left 
      position relative
      .get_imgs
        width 100%
        display block
        img 
          width 100%
    .details_box
      width 66%
      position relative
      margin-left .26667rem
      height 3rem
      display flex
      flex-direction column
      justify-content space-between
      h2
        font-size 14px
        color #333333
        font-weight 400
        max-height 1.12rem
        overflow hidden
        work-break break-all 
        line-height .56rem
      .desc.face
        bottom 1.0667rem
        font-size .34667rem
        color #666666
        span 
          display inline-block
          border-radius .266677rem
          width .53333rem
          height .53333rem
          overflow hidden
          text-align center
          vertical-align middle
          margin-right 10px
          img 
            width 100%
            display block
            margin 0
      .from
        font-size .34667rem
        color #a4a4a4
        width 100%
        bottom .06667rem
        left 0
        .column_name
          float left
          span 
            color #999999
            font-size .26667rem
            border 1px solid #a8a8a8
            border-radius .08rem
            padding 0 .13333rem
            display inline-block
            max-width 3rem
            overflow hidden
            vertical-align middle
            text-overflow ellipsis
            white-space nowrap
            margin-right .13333rem
</style>

