<template>
  <div class="head">
    <div :style="{fontSize: sizeOfFont + 'px'}">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt,
        delectus iure molestias dignissimos fugit quam laudantium ipsam at
        tenetur quisquam itaque assumenda, nesciunt magnam, excepturi
        necessitatibus omnis tempora eveniet!
      </p>
      <div>
        <h3>Change font size</h3>
        <!-- <input type="number" /> -->
        <div class="control">
          <button @click="increaseFont()">Increase font</button>
          <button @click="decreaseFont()">Decrease font</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Quiz',
  data () {
    return {
      main: 'blue',
      value: null
    }
  },
  methods: {
    increaseFont () {
      return this.$store.commit('INCREASE_COUNT')
    },
    decreaseFont () {
      return this.$store.commit('DECREASE_COUNT')
    }
  },
  computed: {
    ...mapState(['sizeOfFont'])
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
  margin-left:1em;
}
button:active{
  background: #2c3e50;
}
.control{
  display:flex;
  justify-content:center;
  /* margin-top:2em; */
}
</style>
