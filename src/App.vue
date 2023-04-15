<script setup>
import Header from './components/Header.vue'
import GameList from './components/GameList.vue'
import Input from './components/Input.vue'
import { getGames } from './API/game'

const originalContent = getGames()
let games = originalContent
console.log(games)

function search(args) {
  games = originalContent.filter((element) => {
    element.title.includes(args)
  })

  console.log(games)
}
</script>

<template>
  <Header></Header>
  <Input :onChange="search"></Input>
  <GameList :games="games"></GameList>
</template>

<style scoped>

</style>
