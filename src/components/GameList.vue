<script setup>
import { onBeforeMount, computed } from "vue";
import { useGamesStore } from "../store/games";
import { roundedDiscount, replaceDot } from "../util";

const gamesStore = useGamesStore();
const gamesList = computed(() => gamesStore.getFilteredGames);
</script>

<template>
  <ul v-if="gamesList.length > 0" class="game-list">
    <li v-for="game in gamesList" class="game-list__item">
      <img
        v-if="game.thumb"
        class="game-list__item-cover"
        loading="lazy"
        :src="game.thumb"
      />
      <div v-else class="game-list__empty-wrapper">
        <img src="../assets/logo.svg" class="game-list__empty-cover" />
        <p class="game-list__empty-text">Sem imagem</p>
      </div>
      <p class="game-list__item-title">{{ game.title }}</p>
      <div class="game-list__item-info">
        <button class="game-list__item-button">DETALHES</button>
        <ul class="game-list__item-prices">
          <li class="game-list__prices game-list__prices--normal-price">
            {{ replaceDot(game.normalPrice) }}
          </li>
          <li class="game-list__prices">{{ replaceDot(game.salePrice) }}</li>
        </ul>
        <li class="game-list__saving">{{ roundedDiscount(game.savings) }}</li>
      </div>
    </li>
  </ul>
  <div v-else class="empty-state">
    <img class="empty-state__logo" loading="lazy" src="../assets/logo.svg" />
    <p class="empty-state__title">Não encontramos nenhum jogo</p>
  </div>
</template>

<style scoped>
.game-list {
  list-style-type: none;
  display: grid;
  gap: 20px;
  padding: 0 8px 0;
}

.game-list__item {
  width: 100%;
  background-color: white;
  background: #0b1641;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 3px 3px 0px #00000040;
  padding-bottom: 12px;
}

.game-list__item-cover {
  width: 100%;
  height: 95px;
}

.game-list__empty-wrapper {
  width: 100%;
  height: 95px;
  padding: 8px;
  box-sizing: border-box;
  background: #888888;
  text-align: center;

}

.game-list__empty-cover {
  width: 52px;
}

.game-list__empty-text {
  margin: 0;
}

.game-list__item-title {
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;
  margin: 9px 10px 16px;
  display: inline-block;
}

.game-list__item-prices {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  list-style-type: none;
}

.game-list__item-info {
  padding: 0;
  margin: 0 10px;
  display: grid;
  grid-template-columns: 1fr 40px 64px;
  gap: 10px;
}

.game-list__prices {
  font-size: 14px;
  margin: 0;
}

.game-list__prices--normal-price {
  font-size: 10px;
  font-weight: 100;
  text-decoration: line-through;
}

.game-list__item-button {
  font-size: 14px;
  background-color: #c70160;
  border-radius: 6px;
  padding: 0 12px;
  width: 92px;
  height: 30px;
  line-height: 16px;
}

.game-list__saving {
  width: 64px;
  height: 30px;
  background-color: #16857b;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-state {
  background-color: #888888;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  border-radius: 6px;
  padding: 8px;
  align-self: center;
}

.empty-state__logo {
  width: 116px;
}

@media (min-width: 321px) {
  .game-list {
    grid-template-columns: repeat(auto-fit, 1fr);
    gap: 20px;
    justify-content: center;
  }

  .game-list__item {
    max-width: 380px;
  }
}

@media (min-width: 480px) {
  .game-list {
    grid-template-columns: repeat(auto-fit, 380px);
    gap: 20px;
  }
}
</style>
