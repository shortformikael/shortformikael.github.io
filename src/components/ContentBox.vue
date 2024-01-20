<script setup lang="ts">

</script>

<template>
  <div class="content-box__container">
    <div class="content-box__title">header</div>
    <div class="content-box__content">
      <p>hey here hello lorem lipsum baby here we go</p>
      <div class="content-box__photo">photo</div>
    </div>
    <div class="content-box__title">footer</div>
  </div>
</template>
<style>

.content-box__container {
  background-color: grey;
  display: flex;
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