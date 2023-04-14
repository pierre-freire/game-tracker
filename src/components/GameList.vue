<script setup>
defineProps({
  games: Object,
})

function replaceDot(price) {
  return price.replace('.', ',')
}

function roundedDiscount(discount) {
  const save = Math.round(discount)
  
  if(save === 0) return 'GRÁTIS'
  return `-${save}%`
}
</script>

<template>
  <ul class="game-list">
    <li class="game-list__item">
      <img
        class="game-list__item-cover"
        :src="games.thumb" 
      />
      <p class="game-list__item-title">{{ games.title }}</p>
      <div class="game-list__item-info">
        <button class="game-list__item-button">DETALHES</button>
        <ul class="game-list__item-prices">
          <li class="game-list__prices game-list__prices--normal-price">${{ replaceDot(games.normalPrice) }}</li>
          <li class="game-list__prices">${{ replaceDot(games.salePrice) }}</li>
        </ul>
        <li class="game-list__saving">{{ roundedDiscount(games.savings) }}</li>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  .game-list {
    list-style-type: none;
    padding: 0 8px;
  }

  .game-list__item {
    width: 100%;
    background-color: white;
    background: #0B1641;
    border-radius: 6px;
    overflow: hidden;
  }

  .game-list__item-cover {
    width: 100%;
    height: 95px;
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
    background-color: #C70160;
    border-radius: 6px;
    padding: 7px 12px;
    width: 92px;
    height: 36px;
    margin-bottom: 12px;
  }

  .game-list__saving {
    width: 64px;
    height: 30px;
    background-color: #16857B;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
  }
</style>