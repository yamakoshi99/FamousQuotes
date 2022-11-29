<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <router-view/><!-- このタグが、パスに紐づいた内容にコロコロと置換される -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Rate from './components/Rate.vue'
import StatementTable from './components/StatementTable.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Rate,
    StatementTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
