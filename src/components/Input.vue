<script setup>
defineProps({
  onChange: Function,
})
</script>

<template>
  <label class="input-wrapper">
    <input 
      class="input"
      placeholder="Pesquisar"
    />
  </label>
</template>

<style scoped>

.input-wrapper {
  position: relative;
}
.input-wrapper::before {
  content: '';
  position: absolute;
  height: 13px;
  width: 13px;
  background-image: url('../assets/search.svg');
  z-index: 1;
  top: 6px;
  left: 13px;
}
.input {
  border-radius: 8px;
  background: #0B1641;
  border: none;
  padding-left: 43px;
  position: relative;
  height: 36px;
  font-size: 14px;
}
</style>