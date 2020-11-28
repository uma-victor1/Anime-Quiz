<template>
    <div>
        <div class="card" v-for="post in posts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Post',
  computed: {
    ...mapState(['posts'])
  }
}
</script>

<style scoped>
.card{
    background:#e8e8e8;
    color:#534e52;
    padding: .8em 2em;
    margin-top:1em;
    border-radius: .7em;
}
</style>
