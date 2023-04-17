<script setup>
import TheHeader from "./components/TheHeader.vue";
import GameList from "./components/GameList.vue";
import SearchBar from "./components/SearchBar.vue";
import Sort from "./components/Sort.vue"
</script>

<template>
  <TheHeader />
  <h1 class="page-title">Ofertas</h1>
  <div class="filters-wrapper">
    <SearchBar />
    <Sort />
  </div>
  <GameList />
</template>

<style scoped>
.page-title {
  margin: 76px 0 4px;
  font-weight: 300;
  font-size: 18px;  
  text-align: center;
}
.filters-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  align-items: end;
}

@media (min-width: 321px) {
  .page-title {
    text-align: left;
    font-size: 36px;
    margin-bottom: 22px;
  }
}
</style>
