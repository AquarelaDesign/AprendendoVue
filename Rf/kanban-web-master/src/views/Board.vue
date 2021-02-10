<template>
  <Board :stages="stages" :activities="activities" @update="handleUpdate" />
</template>

<script>
import Header from '../components/Header.vue'
import Board from '../components/kanban/Board.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    Header,
    Board
  },
  setup (props, context) {
    const store = useStore()
    function handleUpdate ({ act, destiny }) {
      act.stage = destiny
    }
    return {
      stages: computed(() => store.state.stages),
      activities: computed(() => store.state.activities),
      handleUpdate
    }
  }
}
</script>
