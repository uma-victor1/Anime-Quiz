<template>
  <div class="head">
    <h1>All My Post</h1>
      <div class="load-container">
        <p class="loader" v-if="Loading"></p>
      </div>
     <button @click="loadData()">Load Post</button>
    <Post/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Post from '@/components/Post.vue'
export default {
  name: 'Quiz',
  components: {
    Post
  },
  data () {
    return {
      value: 3
    }
  },
  methods: {
    loadData () {
      return this.$store.dispatch('SET_STATUS')
    }
  },
  computed: {
    ...mapState(['Loading'])
  }
}
</script>

<style scoped>
.head {
  text-align:center;
  max-width:600px;
  margin:auto;
}
button{
  display:block;
  padding:8px 20px;
  margin:auto;
  font:bold;
  font-size:1.2rem;
}
button:active{
  background: #2c3e50;
}
.control{
  display:flex;
  justify-content:center;
  /* margin-top:2em; */
}
.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.load-container{
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>
