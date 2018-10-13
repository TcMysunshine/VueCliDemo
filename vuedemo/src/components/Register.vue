<template>
<div>
    <h1>注册</h1>
    <form action='' onSubmit='return false'>
        <div>
            <label for='username'>用户名</label>
            <input type='text' v-model='username' name='username'>
        </div>

        <div>
            <label for='password'>密码</label>
            <input type='password' v-model='password' name='password'>
        </div>

        <div>
            <label for='repassword'>确认密码</label>
            <input type="password" v-model='repassword' name='repassword'>
        </div>

        <div>
            <label for='phone'>手机号码</label>
            <input type="text" v-model='phone' name="phone">
        </div>

        <div>
            <label for='email'>邮箱</label>
            <input type="text" v-model='email' name="email">
        </div>

        <!-- 防止表单自动提交 -->
        <button v-on:click='register'>注册</button>
    </form>

</div>
</template>

<script>
import axios from "axios"
import Vue from "vue"
Vue.prototype.$axios = axios
export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: "",
      repassword: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    register() {
      // console.log('登录')
      let data = {
        username: this.username,
        password: this.password
      }
      // console.log(data.username + data.password)
      // this.username = 'chenhao'
      this.$axios.post("/api/users/addUser", data)
          .then(res => {
          console.log(res.message)
          console.log(res.data)
          console.log(res.data.message)
        })
        .catch(error => {
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
