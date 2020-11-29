<template>
  <div>
    <header>
      <h1>Anime Quiz</h1>
      <div>
      <button @click="resetQuiz">Reset</button>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['resetQuiz'])
  }
}
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.correct{
  font-size: 2rem;
  font-weight: 600;
}
</style>
