<template>
  <div class="page-content">
    <div class="list_all">
      <div class="searchNum">
        <img src="" alt />
        找到
        <span style>6776</span>条相关结果
      </div>
      <div class="prolist" style>
        <ul>
          <li v-for="prod in this.list1.data.list" :key="prod.id">
            <a :href="prod.href">
              <div class="imgs">
                <span class="get_imgs">
                  <img :src="prod.pic" />
                </span>
              </div>
              <div class="details_box">
                <h2>{{prod.name}}</h2>
                <p class="desc">{{prod.intro}}</p>
                <div class="btm">
                  <div class="price">
                    <span>¥{{prod.goodsPrice}}</span>起
                  </div>
                  <div class="guanzhu">{{prod.hits}}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <p class="linkMore">
          <a href="http://m.shihuo.cn/search/searchResult/allweb?page=1&pagesize=30&keywords=%E8%B6%B3%E7%90%83#qk=g_qw" >
            查看所有{{this.list1.data.num}}个符合条件商品
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png" alt />
          </a>
        </p>
      </div>
      <div class="picblock" style>
        <div class="tit">{{this.keywords}}的相关图片</div>
        <div class="img_block">
          <a v-for="(pic,index) in this.list2.data.list" :key="index" :href="pic.href" >
            <img alt :src="pic.pic" />
          </a>
        </div>
        <p class="linkMore">
          <a href="" >
            查看所有{{this.list2.data.num}}个符合条件商品
            <img src=" " alt />
          </a>
        </p>
      </div>
      <div class="quanwSearch" style>
        <div class="tit">
          全网搜索
          <!-- <span>（为您搜索{{this.list3.data.shop_num}}家店铺，共收集{{this.list3.data.goods_num}}条正品信息)</span> -->
        </div>
        <ul>
          <li v-for="goods in this.list3.data.list" :key="goods.id">
            <a isconvert="1" :href="goods.href">
              <div class="imgs">
                <span class="get_imgs">
                  <img :src="goods.img" />
                </span>
              </div>
              <div class="details_box">
                <h2>
                  {{goods.title}}
                </h2>
                <p class="price">¥ &nbsp;{{goods.price}}</p>
                <div class="btm">
                  <div class="bus">{{goods.store}}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <p class="linkMore">
          <a href="http://m.shihuo.cn/search/searchResult/allweb?page=1&pagesize=30&keywords=%E8%B6%B3%E7%90%83#qk=g_qw" >
            查看更多全网相关正品
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png" alt/>
          </a>
        </p>
      </div>
      <div class="shaiwuBlock" style>
        <div class="tit">{{this.keywords}}的相关晒物</div>
        <div class="content">
          <a :href="this.list4.data.list[0].href">
            <div class="desc">
              <h2>{{this.list4.data.list[0].title[0]}}</h2>
              <p>{{this.list4.data.list[0].intro}}</p>
            </div>
            <div class="img_block">
              <span>
                <img alt :src="this.list4.data.list[0].img_attr[0]" />
              </span>
              <span>
                <img alt :src="this.list4.data.list[0].img_attr[1]" />
              </span>
              <span>
                <img alt :src="this.list4.data.list[0].img_attr[2]" />
              </span>
            </div>
            <div class="author">
              {{this.list4.data.list[0].author_name}}
              <span>{{this.list4.data.list[0].date}}</span>
            </div>
          </a>
        </div>
        <p class="linkMore">
          <a href="" >
            查看所有{{this.list4.data.num}}条相关晒物
            <img src="" alt />
          </a>
        </p>
      </div>
      <div class="quanwSearch listLoad" style>
        <div class="tit">{{this.keywords}}的相关信息</div>
        <ul>
          <li v-for="item in this.list5.data.list" :key="item.id" >
            <a :href="item.href">
              <div class="imgs">
                <span class="get_imgs">
                  <img :src="item.img_url"/>
                </span>
              </div>
              <div class="details_box">
                <h2>{{item.title[0]}}</h2>
                <p class="desc">{{item.subtitle}}</p>
                <div class="btm">
                  <div class="bus">{{item.bussiness}}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      list1:{},
      list2:{},
      list3:{},
      list4:{},
      list5:{}
    }
  },
  props:['keywords'],
  async mounted() {
    this.list1 = await http.get({
      url:'/search',
      params:{
        page:1,
        page_size:3,
        type:'goods',
        keywords:this.keywords
      }
    })
    this.list2 = await http.get({
      url:'/search',
      params:{
        page:1,
        page_size:3,
        type:'pic',
        keywords:this.keywords
      }
    })
    this.list3 = await http.get({
      url:'/search/allweb',
      params:{
        page:1,
        page_size:3,
        keywords:this.keywords
      }
    })
    this.list4 = await http.get({
      url:'/search',
      params:{
        page:1,
        page_size:3,
        type:'shaiwu',
        keywords:this.keywords
      }
    })
    this.list5 = await http.get({
      url:'/search',
      params:{
        page:1,
        page_size:3,
        type:'news',
        keywords:this.keywords
      }
    })
    let bScroll = new BScroll('.page-content',{
      pullUpLoad:true,
      click:true
    })
    let page = 1
    bScroll.on('pullingUp',async function(){
      page++
      
      Indicator.open()
      //获取翻页获取到的新数据
      let result = (await http.get({
        url:'/search',
        params:{
          page:page,
          page_size:3,
          type:'news',
          keywords:this.keywords
        } 
      })).data
      //将第一次的获取到的list与本次拖拽获取的结果合并,并将合并完成的集合返回给list返回给组件
      this.list5.list = [...this.list5.list,...result.list]
      
      
      //下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
      vm.$nextTick(()=> {
        this.refresh()
        this.finishPullUp()
        Indicator.close()
      })
    })

    
  }
}
</script>

<style lang="stylus" scoped>
.page-content
  height 100%
  .list_all
    background #f0f3f5
    width 100%
    .searchNum
      background #f0f3f5
      height 1rem
      line-height 1rem
      font-size .34667rem
      color #333
      padding 0 .26667rem
    .prolist
      margin-bottom .26667rem 
      background #fff
      ul
        padding-left: .26667rem
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
                font-weight 700
                line-height .53333rem
                max-height .53333rem
                overflow hidden
              .desc
                font-size .32rem
                color #999
              .btm
                color #999
                font-size .32rem
                width 100%
                .price
                  float left
                  color #999
                  font-size .32rem
                  span
                    color #FF4338
                    font-size .42667rem
                    padding-right .13333rem
                .guanzhu
                  float right
                  text-align left
      .linkMore
        text-align center
        padding .26667rem 0
        border-bottom 1px solid #e6e6e6
        a
          font-size .32rem
          color #278ccf
          img
            margin-left .13333rem
            width .13333rem        
    .picblock
      margin-bottom .26667rem
      background #fff
      .tit
        height 1.06667rem
        line-height 1.06667rem
        font-size .4rem
        color #333
        padding-left .26667rem
        border-bottom 1px solid #e6e6e6
      .img_block
        border-bottom 1px solid #e6e6e6
        width 100%
        overflow hidden
        padding .13333rem
        display flex
        a
          flex  1
          display block
          padding .13333rem
          img
            width 100%
    .quanwSearch
      margin-bottom .26667rem
      background #fff  
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
        padding-left .26667rem
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
                max-height .53333rem
                overflow hidden
                span 
                  color #ff4338
              .price
                color #ff4338
                font-size .42667rem
                span
                  color #FF4338
                  font-size .42667rem
                  padding-right .13333rem
              .btm
                color #999
                font-size .32rem
                width 100%
                .bus
                  color #999
                  font-size .32rem
                  float left
      .linkMore
        text-align center
        padding .26667rem 0
        border-bottom 1px solid #e6e6e6
        a
          font-size .32rem
          color #278ccf
          img
            margin-left .13333rem
            width .13333rem
    .shaiwuBlock
      margin-bottom .26667rem
      background #fff
      .tit
        height 1.06667rem
        line-height 1.06667rem
        font-size .4rem
        color #333
        padding-left .26667rem
        border-bottom 1px solid #e6e6e6
      .content
        border-bottom 1px solid #e6e6e6
        a
          .desc
            padding 0 .26667rem
            h2
              font-weight 700
              font-size .42667rem
              padding-top .13333rem
              width 100%
              overflow hidden
              height .93333rem
              line-height .93333rem
            p
              font-size .34667rem
              color #666
              height 1.06667rem
              line-height .53333rem
              overflow hidden
              text-overflow ellipsis
              -webkit-line-clamp 2
              word-break break-all
          .img_block
            width 100%
            overflow hidden
            padding 0 .13333rem
            display flex
            span 
              display block
              flex 1
              padding .13333rem
              max-height 3.2rem
              overflow hidden
              img 
                width 100%
          .author
            font-size .37333rem
            color #666
            padding .13333rem .26667rem
            span
              font-size .32rem
              color #999
              padding-left  .13333rem
      .linkMore
        text-align center
        padding .26667rem 0
        border-bottom 1px solid #e6e6e6
        a
          font-size .32rem
          color #278ccf
          img
            margin-left .13333rem
            width .13333rem
    .quanwSearch.listLoad
      margin-bottom .26667rem
      background #fff  
      .tit
        height 1.2rem
        line-height 1.2rem
        font-size .4rem
        color #333
        padding-left .26667rem
        border-bottom 1px solid #e6e6e6
      ul
        padding-left .26667rem
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
                max-height .53333rem
                overflow hidden
              .price
                color #ff4338
                font-size .4rem
                span
                  color #FF4338
                  font-size .42667rem
                  padding-right .13333rem
              .btm
                color #999
                font-size .32rem
                width 100%
                .bus
                  color #999
                  font-size .32rem
                  float left
</style>

