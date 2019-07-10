import Vue from 'vue'

import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'

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
        console.log(data)
        Indicator.open()
        //将第一次的list与本次拖拽获取的list合并
        vm.list = [...vm.list,...(await http.get(data.params)).data]
        console.log(vm.list)
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