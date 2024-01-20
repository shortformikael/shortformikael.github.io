<script setup lang="ts">
// import { useRoute, RouterView } from 'vue-router'
// import { computed } from 'vue'
import PageTitle from '@/components/PageTitle.vue';
import Content from '@/components/Content';

// const routeName = computed(() => useRoute().name)

</script>

<template>
  <!-- <PageTitle />
  <div class="router-container"> 
    <RouterView />
    <div class="footer">
      <a class="author" href="https://twitter.com/shortformikael">@shortformikael</a>
      <RouterLink
        v-if="routeName !== 'home'"
        class="back-button"
        to="/"
      > &larr;
      </RouterLink>
    </div>
  </div> -->  
  <PageTitle/>
  <Content/>
</template>

<style>



/* .router-container {
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px lightgrey;
  border-radius: 20px;
  flex-direction: column;
  gap: 20px;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: end;
  font-size: 32px;
}

.author {
  background-color: transparent;
  color: grey;
  padding: 0px;
}
.author:hover {
  background-color: transparent;
}*/
</style> 
