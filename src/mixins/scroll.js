import Vue from 'vue'

import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'

import _ from 'lodash'

Vue.mixin({
  methods: {
    async scroll({vm,container,data}){
      let param_str = 1
      Indicator.open()

      vm.list = (await http.get(data.params)).data

      Indicator.close()

      //创建better-scrolle实例，打开下拉加载属性
      let bScroll = new BScroll(container,{
        pullUpLoad:true,
        click:true
      })
      //在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。
      bScroll.on('pullingUp',async function(){
        param_str++
        
        data.params.params.param_str = ":"+param_str+":"
        Indicator.open()
        //将第一次的list与本次拖拽获取的list合并
        vm.list = [...vm.list,...(await http.get(data.params)).data]
        //下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        vm.$nextTick(()=> {
          this.refresh()
          this.finishPullUp()
          Indicator.close()
        })
      })
    },
    async searchScroll({vm,container,data}) {
      let page = 1
      Indicator.open()

      vm.list = (await http.get(data.params)).data

      Indicator.close()

      //创建better-scrolle实例，打开下拉加载属性
      let bScroll = new BScroll(container,{
        pullUpLoad:true,
        click:true
      })
      //在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。
      bScroll.on('pullingUp',async function(){
        page++
        
        data.params.params.page = page
        Indicator.open()
        //获取翻页获取到的新数据
        let result = (await http.get(data.params)).data
        //将第一次的获取到的list与本次拖拽获取的结果合并,并将合并完成的集合返回给list返回给组件
        let jjj = _.merge(vm.list,result)
        console.log(jjj)
        
        //下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        vm.$nextTick(()=> {
          this.refresh()
          this.finishPullUp()
          Indicator.close()
        })
      })
    }
  }
})