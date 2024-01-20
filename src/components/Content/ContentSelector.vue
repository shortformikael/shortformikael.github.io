<script setup lang="ts">

</script>

<template>
  <div class="content-selector">
    <div class="content-selector__container">
      <h1>IndexTitle</h1>
      <a>ListItem</a>
      <a>ListItem</a>
      <a>ListItem</a>
    </div>
    
  </div>
</template>

<style>
.content-selector {
  position: relative;
  width: 20%;
  height: 100vh;
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