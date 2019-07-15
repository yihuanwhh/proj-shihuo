<template>
  <div class="login-container">
    <form class="postdata" >
      <div class="username-con">
        账号:<input type="text" name="username" class="input" id="username" v-model="username"> 
      </div>
      <div class="password-con">
        密码:<input type="password" name="password" class="input" id="password" v-model="password">
      </div>
    </form>
    <div class="submit">
      <button class="btn" @click="submit" >注册</button>
      <!-- <button class="btn" @click="cancel" >取消</button> -->
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    pass() {
      return this.$store.state.pass
    }
  },
  methods: {
    submit() {
      let arr = localStorage.getItem('userdata')
      let jsondata = JSON.stringify({
        "username":this.username,
        "password":this.password
      })
      arr = arr + jsondata
      console.log(jsondata)
      localStorage.setItem('userdata',arr)
      alert('注册成功！')
      
    },

    cancel() {
      
    }
  }
}
</script>


<style lang="stylus" scoped>
.login-container
  flex 1
  .postdata
    height 60%
    margin-left 10px
    color #000
    font-size 16px
    .input
      width 60%
      height .82667rem
      border-radius .10667rem
      border 0
      font-size .32rem
      padding-left .2rem
      margin .2rem 0
  .submit
    height 40%
    font-size 16px
    margin-left 10px
    .btn
      margin-right 40px
</style>

