<script setup lang="ts">
</script>

<template>
  <main class="menu-container">
    <RouterLink to="/game">START</RouterLink>
    <RouterLink to="/options">OPTIONS</RouterLink>
    <RouterLink to="/leaderboard">LEADERBOARD</RouterLink>
  </main>
</template>

<style>

.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
}

.menu-container a {
  width: 300px;
  font-size: 40px;
}

</style>