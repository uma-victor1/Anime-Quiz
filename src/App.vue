<template>
  <div id="app">
    <Header/>
    <Select/>
    <Quiz/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Select from '@/components/Select.vue'
import Quiz from '@/components/Quiz.vue'
export default {
  name: 'App',
  components: {
    Header,
    Select,
    Quiz
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
