<script setup>
import { ref, watch } from "vue"; 
import { useGamesStore } from "../store/games";

const searchText = ref('');
const gamesStore = useGamesStore();

watch(searchText, () => {
  gamesStore.searchGames(searchText.value);
})

function searchValue() {
  gamesStore.searchGames(searchText.value);
}
</script>

<template>
  <label class="input-wrapper">
    <input
      class="input"
      placeholder="Pesquisar"
      type="text"
      v-model="searchText"
    />
  </label>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  width: 174px;
  display: block;
}
.input-wrapper::before {
  content: "";
  position: absolute;
  height: 13px;
  width: 13px;
  background-image: url("../assets/search.svg");
  z-index: 1;
  top: 12px;
  left: 13px;
}
.input {
  border-radius: 8px;
  background: #0b1641;
  border: none;
  padding-left: 43px;
  position: relative;
  height: 36px;
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
}

@media (min-width: 321px) {
  .input-wrapper {
    width: 100%;
    max-width: 380px;
    min-width: 174px;
  }
}
</style>
