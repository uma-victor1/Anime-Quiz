<template>
  <div>
    <header>
      <h1>Anime Quiz</h1>
      <div>
        <button @click="$store.commit('RESETQUIZ')">Reset</button>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header'
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
