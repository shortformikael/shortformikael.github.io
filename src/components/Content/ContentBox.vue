<script setup lang="ts">
const props = defineProps(['item'])

console.log(props.item);
</script>

<template>
  <div class="content-box__container" :id="props.item.title">
    <div class="content-box__title">{{ props.item.title }}</div>
    <div class="content-box__content">
      <p>{{ props.item.content }}</p>
      <div class="content-box__photo">{{ props.item.image }}</div>
    </div>
    <div class="content-box__title">{{ props.item.title }}</div>
  </div>
</template>
<style>

.content-box__container {
  background-color: grey;
  display: flex;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  border: 1px solid red;
}

.content-box__container .content-box__title:first-child{ 
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.content-box__container .content-box__title:last-child{ 
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.content-box__title {
  background-color: purple;
  
}

.content-box__title {

}

.content-box__content {
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.content-box__photo {
  display: flex;
  width: 200px;
  height: 300px;
  border-radius: 15px;
  background-color: chartreuse;
}

</style>