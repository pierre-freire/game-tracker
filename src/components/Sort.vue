<script setup>
import { useGamesStore } from "../store/games";

const gamesStore = useGamesStore();

function searchValue(sortValue) {
  if (sortValue.target.value.slice(-1) == "B") {
    gamesStore.sortGames(sortValue.target.value.slice(0, -1), "bigger");
    return;
  }
  gamesStore.sortGames(sortValue.target.value);
}
</script>

<template>
  <label class="input-wrapper">
    <select class="input" v-model="searchText" @change="searchValue">
      <option value="" disabled selected>Select an option</option>
      <option value="savings">% de Desconto</option>
      <option value="salePriceB">Maior Preço</option>
      <option value="salePrice">Menor Preço</option>
      <option value="title">Titulo</option>
    </select>
  </label>
</template>

<style scoped>
</style> 