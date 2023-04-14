<script setup>
import Header from './components/Header.vue'
import GameList from './components/GameList.vue'
import { getGames } from './API/game'

const game = getGames()
console.log(game)
</script>

<template>
  <Header></Header>
  <GameList :games="game"></GameList>
</template>

<style scoped>

</style>
