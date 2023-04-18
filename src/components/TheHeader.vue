<script setup></script>
<template>
  <header class="header">
    <img class="header__logo" loading="lazy" src="./../assets/logo.svg" />
    <p class="header__title">Game <b>Tracker</b></p>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #0b1641;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 11px 0;
  margin-bottom: 8px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
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
  color: #ffffff;
}

@media (min-width: 321px) {
  .header {
    position: static;
  }
}
</style>
