<script setup lang="ts">
import ContentBox from './ContentBox.vue';

</script>

<template>
  
  <div class="content-box-repeater__wrapper">
    <ContentBox/>
    <ContentBox/>
    <ContentBox/>
  </div>
</template>

<style>
.content-box-repeater__wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>