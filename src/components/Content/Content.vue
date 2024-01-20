<script setup lang="ts">
import ContentBox from './ContentBox.vue';
import ContentSelector from './ContentSelector.vue';
import ContentBoxRepeater from './ContentBoxRepeater.vue';

</script>

<template>
  <div class="content">
    <ContentBoxRepeater/>
    <ContentSelector/>
  </div>
</template>

<style>
.content{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}
</style>