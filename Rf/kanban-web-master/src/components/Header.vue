<template>
  <div class="header-container">
    <h1>
      Kanban Board
    </h1>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  components: {
    Button
  },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
h1 {
  color: #fff;
  margin: auto 20px;
}

.header-container {
  border-radius: 3px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 5px 20px;
  background-color: rgb(76, 125, 173);
  height: 6rem;
}
</style>
