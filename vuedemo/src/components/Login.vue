<template>
  <div >
    <h1>登录</h1>
    <form onSubmit='return false'>
        <label for=''>用户名</label>
        <input type='text' v-model='username' name='username'>
        <label for=''>密码</label>
        <input type='password' v-model='password' name='password'>
        <!-- 防止表单自动提交 -->
        <button v-on:click='login'>登录</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios
export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // console.log('登录')
      let data = {
        username: this.username,
        password: this.password
      }
      // console.log(data.username + data.password)
      // this.username = 'chenhao'
      this.$axios.post('/api/users/userLogin', data).then(res => {
        console.log(res.message)
        console.log(res.data)
        console.log(res.data.message)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
