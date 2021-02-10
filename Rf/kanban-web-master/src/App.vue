<template>
  <Header />
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/board">Board</router-link>
    </li>
    <li>
      <router-link to="/new">Nova Atividade</router-link>
    </li>
  </ul>
  <Suspense>
    <template #default>
      <router-view :name="viewName" v-slot="{ Component, route }">
        <keep-alive>
          <component
            :is="Component"
            :key="route.name === 'repeat' ? route.path : undefined"
          />
        </keep-alive>
      </router-view>
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import Header from './components/Header.vue'
import { defineComponent, inject, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    Header
  },
  setup () {
    const route = useRoute()
    const viewName = ref('default')
    const currentLocation = computed(() => {
      const { matched, ...rest } = route
      return rest
    })
    return {
      currentLocation,
      viewName
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  justify-content:center;
  align-content:center;
  list-style: none;
}

li { 
  list-style-type: none;
  text-decoration: none;
  color: white;
  list-style: none;
  margin: 0px 10px;
  float: left;
}
</style>