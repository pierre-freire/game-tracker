<script setup>
import { onMounted } from "vue";
import { useGamesStore } from "../store/games";

const gamesStore = useGamesStore();

onMounted(() => {
  gamesStore.sortGames("savings", "bigger");
});

const options = [
  { value: "savingsB", label: "% de Desconto" },
  { value: "salePriceB", label: "Maior Preço" },
  { value: "salePrice", label: "Menor Preço" },
  { value: "title", label: "Titulo" },
];

function searchValue(sortValue) {
  if (sortValue.target.value.slice(-1) == "B") {
    gamesStore.sortGames(sortValue.target.value.slice(0, -1), "bigger");
    return;
  }

  gamesStore.sortGames(sortValue.target.value);
}
</script>

<template>
  <div class="sort-wrapper">
    <label class="sort__label">Ordenar por</label>
    <select class="sort__input" @change="searchValue">
      <option
        v-for="option in options"
        :value="option.value"
        :selected="option.selected"
        class="sort__input-option"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.sort-wrapper {
  display: flex;
  flex-direction: column;
  width: 122px;
  text-align: center;
}

.sort__label {
  font-size: 10px;
  font-weight: 700;
}
.sort__input {
  background-color: #0b1641;
  font-size: 14px;
  padding: 10px 8px;
  border-radius: 8px;
  border: none;
  height: 36px;
}

.sort__input-option:hover {
  color: #c70160;
}

@media (min-width: 321px) {
  .sort-wrapper {
    width: 100%;
    max-width: 310px;
    min-width: 122px;
    flex-direction: column;
    align-items: end;
    justify-self: end;
  }

  .sort__label {
    font-size: 18px;
    margin-right: 20px;
  }
}

@media (min-width: 600px) {
  .sort-wrapper {
    flex-direction: row;
    justify-content: end;
    align-items: center ;
  }
}
</style>
