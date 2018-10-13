<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <li v-for='user in users'>{{user.id}}, {{user.username}}, {{user.password}}</li>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
Vue.prototype.$axios = axios;
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Hello World",
      users:''
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      this.$axios.get("/api/users/queryAllUser").then(res => {
        if(res.status == 200){
          this.users = res.data
          console.log(this.users)
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
