<template>
  <div>
    <div class="container">
      <h1 v-if="loading">Loading...</h1>
      <div v-if="Question.length">
        <h1><span>Question: {{current + 1}} </span></h1>
        <h2>{{ Question[current].question | replace | apostroph }}</h2>
        <div class="options">
          <ul v-for="(options, index) in shuffledAnswers" :key="index">
            <li @click="selectedAnswer(index)" :class="checkAnswerClass(index)">{{ options }}</li>
          </ul>
        </div>
        <div class="nav">
          <button @click="submit" :disabled="selectedIndex == null || answered">Submit</button>
          <button @click="next" :disabled="answered == false">Next</button>
        </div>
        <div>
          <h1>Score: <span>{{correctAnswers}}/{{Question.length}}</span></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['next', 'selectedAnswer', 'submit']),
    checkAnswerClass (index) {
      let answerClass = ''
      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correctanswer'
      } else if (this.answered && this.selectedIndex === index && this.correctIndex !== index) {
        answerClass = 'incorrectanswer'
      }
      return answerClass
    }
  },
  computed: {
    ...mapState(['loading', 'Question', 'current', 'selectedIndex', 'shuffledAnswers', 'correctIndex', 'answered', 'correctAnswers']),
    ...mapGetters(['allOptions'])
  },
  filters: {
    replace: function (value) {
      return value.replace(/&quot;/g, '"')
    },
    apostroph: function (value) {
      return value.replace(/&#039;/g, "'")
    }
  },
  watch: {
    current: {
      handler () {
        this.$store.commit('RESET')
        this.$store.commit('SHUFFLE_ANSWER')
      }
    }
  }
}
</script>

<style scoped>
.container{
    display:flex;
    flex-direction: column;
    max-width:700px;
    margin: auto;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
}
li:hover{
    background:white;
    cursor:pointer;
}
.selected{
    background: skyblue;
}
.correctanswer{
    background: springgreen;
}
.incorrectanswer{
    background: tomato;
}
</style>
