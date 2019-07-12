<template>
  <div class="page-content">
    <div class="searchList page-route slide-transition">
      <div class="list_goods clearfix">
        <ul>
          <li v-for="goods in this.list.list" :key="goods.id" >
            <a :href="goods.href">
              <div class="imgs">
                <span class="get_imgs">
                  <img :src="goods.pic" />
                </span>
              </div>
              <div class="details_box">
                <h2>{{goods.name}}</h2>
                <p class="desc">{{goods.intro}}</p>
                <div class="btm">
                  <div class="price">
                    <span>
                      <s>¥</s>{{goods.goodsPrice}}
                    </span>起
                  </div>
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
export default {
  data() {
    return {
      list : {}
    }
  },
  props:['keywords'],
  mounted() {
    //获取搜索框传来的搜索参数
    //拖拽滚动加载数据
    this.searchScroll({
      vm:this,
      container:'.page-content',
      data:{
        url:'/search',
        params:{
          type:'goods',
          keywords:this.keywords
        }
      }
    })
  }
}
</script>


<style lang="stylus" scoped>
.page-content
  height 100%
  .searchList
    padding 1.2rem 0 0
    background #f0f3f5
    position absolute
    top 0
    left 0
    width 100%
    // height 100%
    .list_goods
      padding: .13333rem;
      width: 100%;
      background: #fff;
      ul
        li
          width 50%
          padding .13333rem
          float left
          a
            .imgs
              width 100%
              .get_imgs
                width 100%
                img 
                  width 100%
            .details_box
              background #ffffff
              padding 0 .26667rem
              h2
                font-size .4rem
                width 100%
                height .66667rem
                line-height .66667rem
                overflow hidden
              .desc
                color #999
                font-size .32rem
                height .53333rem
                line-height .53333rem
                overflow hidden
              .btm
                .price  
                  font-size .29333rem
                  color #999
                  span
                    color #FF4338
                    font-size .4rem
</style>
