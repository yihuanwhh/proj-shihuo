<template>
  <div>
    <div class="list-view">
        <ul id="shihuo-news">
          <Item
            v-for="prod in list"
            :key = "prod.id"
            :prod="prod"
          >
          </Item>
          <!-- <div id="listView">
            <div class="list-view-top">
              <div class="list-menu">
                <ul>
                  <router-link to="/home/all" tag="li" active-class="on" >推荐</router-link>
                  <router-link to="/home/basketball" tag="li" active-class="on" >篮球</router-link>
                  <router-link to="/home/running" tag="li" active-class="on" >跑步</router-link>
                  <router-link to="/home/fitness" tag="li" active-class="on" >健身</router-link>
                  <router-link to="/home/freestyle" tag="li" active-class="on" >潮流</router-link>
                </ul>
              </div>
              <div class="list-submenu">
                <ul class="clearfix">
                  <li class="on">全部</li>
                  <li>单品推荐</li>
                  <li>原创精选</li>
                  <li>用户晒物</li>
                </ul>
              </div>
            </div>
            <list v-if="params" :params="params"></list>
          </div> -->
        </ul>
        <div class="infinite-loading-container" _v-34e13b62 ref="infiniteLoading">
          <div _v-34e13b62 style="display: none;">
            <i _v-34e13b62 class="loading-spiral"></i>
          </div>
          <div class="infinite-status-prompt" _v-34e13b62 style="display: none;">
            <span slot="no-results"></span>
          </div>
          <div class="infinite-status-prompt" _v-34e13b62 style="display: none;">
            <span slot="no-more"></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import http from '../../utils/http'
import Item from './Item'
export default {
  
  props:
    ['list']
  ,

  components:{
    Item
  },
  // async mounted() {
  //   let result = await http.get({
  //     url:'/homefis/getNews'
  //   })
  //   this.itemlist = result.data
  // },

  // async mounted() {
  //   console.log(this.params)
  //   let result = await http.get({
  //     url:'/homefis/getNews',
  //     params:{
  //       type:this.params.type,
  //       channel_type:this.params.channel_type
  //     }
  //   })
  //   this.itemlist = result.data
  // }
}
</script>


<style lang="stylus" scoped>
.list-view
  background #ffffff
  padding-top .26667rem
  padding-left .26667rem
  width 100%
  overflow hidden
  ul
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
                margin-right .13333rem
</style>

