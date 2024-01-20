<script setup lang="ts">
import ContentSelector from './ContentSelector.vue';
import ContentBoxRepeater from './ContentBoxRepeater.vue';
import getContent from '@/composables/useContent'

//console.log(getContent());

const contentArray = getContent();

</script>

<template>
  <div class="content">
    <ContentBoxRepeater :content="contentArray"/>
    <ContentSelector :content="contentArray"/>
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