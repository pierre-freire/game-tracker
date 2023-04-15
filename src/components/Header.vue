<script setup></script>
<template>
  <header class="header">
    <img class="header__logo" src='./../assets/logo.svg' />
    <h1 class="header__title">Game <b>Tracker</b></h1>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #0B1641;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 11px 0;
  margin-bottom: 8px;
}

.header__logo {
  width: 30px;
  height: 30px;
  display: block;
  margin-right: 10px;
}

.header__title {
  margin: 0;
  font-size: 24px;
  font-weight: 300;
  color: #FFFFFF;
}
</style>