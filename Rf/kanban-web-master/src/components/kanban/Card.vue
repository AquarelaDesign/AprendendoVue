<template>
  <div class="card" draggable="true">
    {{ activity.title }}
  </div>
</template>

<script>
export default {
  props: ['activity']
}
</script>

<style scoped>
.card {
  display: flex;
  transition: 0.3s;
  padding: 0.5em;
  background-color: rgb(235, 231, 231);
  border-radius: 3px;
  width: 18rem;
  margin: 4px 4px;
  transition: opacity 0.3s, transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}
</style>
