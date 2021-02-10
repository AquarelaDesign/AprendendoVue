<template>
  <div class="container animate">
    <label for="activity"><b>Atividade</b></label>
    <input
      type="text"
      placeholder="Atividade"
      name="activity"
      v-model="activity.title"
      required
    />

    <label for="stage"><b>Estágio</b></label>
    <input
      type="text"
      placeholder="Estágio"
      name="stage"
      v-model="activity.stage"
      required
    />
 
    <button @click="handleAction">Salvar</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'New',
  setup () {
    const activity = {
      id: 0,
      title: 'Atividade 1',
      due_date: Date.now(),
      stage: 'To-Do'
    }
    const store = useStore()

    function handleAction () {
      store.dispatch('addActivity', { ...activity })
      alert('Sucesso')
    }

    return {
      activity,
      handleAction
    }
  }
}
</script>

<style>
input[type='text'] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px auto;
  display: block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #556569;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  border: 1px solid #888;
  width: 30%;
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
