<script setup>
defineProps({
  games: Array,
})

//background: linear-gradient(45deg, #0B1641 0%, #C70160 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF);

function replaceDot(price) {
  return price.replace('.', ',')
}

function roundedDiscount(discount) {
  const save = Math.round(discount)

  if(save == 100) return 'GRÁTIS'
  return `-${save}%`
}
</script>

<template>
  <ul class="game-list">
    <li v-for="game in games" class="game-list__item">
      <img
        class="game-list__item-cover"
        loading="lazy"
        :src="game.thumb" 
      />
      <p class="game-list__item-title">{{ game.title }}</p>
      <div class="game-list__item-info">
        <button class="game-list__item-button">DETALHES</button>
        <ul class="game-list__item-prices">
          <li class="game-list__prices game-list__prices--normal-price">${{ replaceDot(game.normalPrice) }}</li>
          <li class="game-list__prices">${{ replaceDot(game.salePrice) }}</li>
        </ul>
        <li class="game-list__saving">{{ roundedDiscount(game.savings) }}</li>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  .game-list {
    list-style-type: none;
    padding: 0 8px;
    display: grid;
    gap: 20px;
  }

  .game-list__item {
    width: 100%;
    background-color: white;
    background: #0B1641;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 3px 3px 0px #00000040;
    padding-bottom: 12px;
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
    padding: 0 12px;
    width: 92px;
    height: 30px;
    line-height: 16px;
  }

  .game-list__saving {
    width: 64px;
    height: 30px;
    background-color: #16857B;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>