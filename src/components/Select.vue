<template>
    <div>
           <div>
        <form>
            <label for="difficulty">select difficulty:</label>
            <select v-model="difficulty" name="difficulty" id="difficulty">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
            <br><br>
            <button @click.prevent="setDifficulty()">Start Quiz</button>
        </form>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      difficulty: ''
    }
  },
  computed: {
    ...mapState(['difficulty'])
  },
  methods: {
    setDifficulty () {
      this.$store.dispatch('setDifficulty', this.difficulty)
    }
  }
}
</script>

<style scoped>

</style>
