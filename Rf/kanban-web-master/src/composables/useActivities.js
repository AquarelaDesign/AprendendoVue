import { computed, ref } from 'vue'

export function activityFilter (activityRepository) {
  const stageNameFilter = ref('')
  const stageActivities = computed(() => {
    return activityRepository.filter(
      activity => activity.stage === stageNameFilter.value
    )
  })

  return {
    stageNameFilter,
    stageActivities
  }
}