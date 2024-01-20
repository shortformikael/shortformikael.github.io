<script setup lang="ts">
import ContentBox from './ContentBox.vue';

const props = defineProps(['content']);

</script>

<template>
  <div class="content-box-repeater__wrapper">
    <ContentBox v-for="item in props.content" :key="item.id" :item="item" />
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