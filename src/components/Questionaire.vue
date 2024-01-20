<script setup lang="ts">
import getQuestions from '@/composables/useQuestions.ts'
import { ref, computed } from 'vue'

const questions = ref(getQuestions());
const currentQuestion = ref(0);
const progressbarStyle = computed(() => {
  return { width: `${calcCurrentProgress()}%` }
});

function isCurrentQuestion(i: number) {
  return i === currentQuestion.value;
}

function navigateNextQuestion() {
  if(currentQuestion.value < questions.value.length - 1)
    currentQuestion.value = currentQuestion.value + 1;
}

function navigatePreviousQuestion() {
  if(currentQuestion.value > 0)
    currentQuestion.value = currentQuestion.value - 1;
}

function calcCurrentProgress() {
  //return 0 + ((currentQuestion.value + 1) / questions.value.length) * 100;
  return 0 + (currentQuestion.value / (questions.value.length - 1)) * 100;
}

</script>

<template>
  <div class="questionaire">

    <div
      class="questionaire__progress-bar"
      :style="progressbarStyle"
    ></div>
    <div
      v-for="(question, index) in questions"
      :key="question.id"
      class="questionaire__container"
    >
      <div
        v-if="isCurrentQuestion(index)"
        class="questionaire__question"
      >
        {{ (index + 1) }}. {{ question.content }}
        <div
          v-for="(option, optionsIndex) in question.options"
          class="questionaire__option"
        >
          {{ optionsIndex }}. {{ option }}
        </div>
      </div>
    </div>

    <div class="questionaire__footer">
      <div class="questionaire__footer-left">
        <button
          v-if="currentQuestion !== 0"
          class="page-button"
          @click="navigatePreviousQuestion"
        > &lsaquo;
        </button>
      </div>
      <div class="questionaire__footer-right">
        <button
          v-if="currentQuestion !== questions.length - 1"
          class="page-button"
          @click="navigateNextQuestion"
        > &rsaquo;
        </button>
      </div>
    </div>
  </div>
</template>

<style>

.questionaire {
  padding: 5px;
  width: 100%;
}

.questionaire__container {
  width: 100%;
}

.questionaire__question {
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.questionaire__option {
  width: 80%;
  margin: 5px;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 16px;
  text-align: left;
  transition: all ease 0.5s;
}

.questionaire__option:hover {
  background-color: white;
  color: black;
}

.questionaire__footer {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.page-button{
  font-size: 50px;
  padding: 0px;
  background-color: transparent;
  border: none;
  color: lightgray;
  user-select: none;
  cursor: pointer;

}

.questionaire__progress-bar {
  height: 5px;
  width: 100%;
  background-color: lightgray;
  transition: 0.4s ease-out;
}
</style>



