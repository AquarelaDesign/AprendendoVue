<template>
  <div class="stage">
    <h1>
      {{ title }}
    </h1>
    <Card
      v-for="activity in activities"
      :key="activity.key"
      :activity="activity"
      @drag="e => drag(e, activity)"
    />
  </div>
</template>

<script>
import Card from './Card.vue'
import { activityFilter } from '../../composables/useActivities.js'
import { ref } from 'vue'

export default {
  components: {
    Card
  },
  props: {
    title: {
      type: String
    },
    activities: {
      type: Array
    }
  },
  setup (props, { emit }) {
    let _activity = {}

    function drag (e, activity) {
      try {
        emit('drag', { e, activity })
      } catch (err) {
        console.log('drag -> err', err)
      }
    }

    const { stageNameFilter, stageActivities } = activityFilter(
      props.activities
    )
    stageNameFilter.value = props.title

    return {
      title: props.title,
      activities: stageActivities,
      drag
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: rgb(139, 137, 137);
  border-radius: 3px;
  color: white;
  padding: 2px;
}

.stage {
  display: inline-block;
  margin: auto;
  width: 20rem;
  height: 10rem;
}
</style>
