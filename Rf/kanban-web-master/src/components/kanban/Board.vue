<template>
  <div class="container">
    <Stage
      v-for="stage in stages"
      :key="stage"
      :ondrop="e => drop(e, stage)"
      :ondragover="allowDrop"
      :title="stage"
      :activities="activities"
      @drag="drag"
    />
  </div>
</template>

<script>
import Stage from './Stage.vue'
import { useStore } from 'vuex'

export default {
  components: {
    Stage
  },
  props: {
    stages: {
      type: Array
    },
    activities: {
      type: Array
    }
  },
  setup (props, { emit }) {
    let act = {}

    function drag ({ e, activity }) {
      if (activity) act = activity
    }

    function drop (e, title) {
      e.preventDefault()
      emit('update', { act, destiny: title })
    }

    function allowDrop (e) {
      e.preventDefault()
    }

    return {
      drop,
      allowDrop,
      drag
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
