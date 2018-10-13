<template>
  <div >
    <h1>{{ name }}</h1>
    <h2>My Information</h2>
     <a href='/api/users/queryAllUser'>查询所有用户</a>
  </div>
</template>

<script>
export default {
  name: 'ChenHao',
  data () {
    return {
      name: 'Hello,I am chenhao'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
