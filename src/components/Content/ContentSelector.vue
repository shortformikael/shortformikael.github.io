<script setup lang="ts">

const props = defineProps(['content']);

</script>

<template>
  <div class="content-selector">
    <div class="content-selector__container">
      <h1>IndexTitle</h1>
      <a v-for="item in props.content" :href="'#'+item.title" target="_self">{{ item.title }}</a>
    </div>
    
  </div>
</template>

<style>
.content-selector {
  position: relative;
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.content-selector__container {
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>