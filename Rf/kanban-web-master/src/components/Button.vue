<template>
  <button @click="$emit('clicked')">+</button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
button {
  position: absolute;
  border-radius: 30px;
  top: 90%;
  left: 95%;
  background-color: #555;
  color: white;
  font-size: 28px;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  text-align: center;
}
</style>
