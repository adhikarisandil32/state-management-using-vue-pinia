<template>
  <main class="mx-auto px-2">
    <h1 class="my-4 p-4 bg-blue-900 mx-auto text-center text-5xl text-white rounded font-bold">
      Pinia Tasks
    </h1>

    <TaskForm/>

    <br>

    <button @click="filter = 'all'">All Tasks</button>
    <button @click="filter = 'favs'">Fav Tasks</button>
    <button @click="filter = 'nonFavs'">Non-Fav Tasks</button>

    <!-- For loading -->
    <div v-if="taskStore.loading">
      <span>Loading Tasks...</span>
    </div>

    <!-- All Tasks -->
    <div v-if="filter === 'all'">
      <p>{{taskStore.totalCount}} Total Tasks</p>
      <hr>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <!-- Favourite Tasks -->
    <div v-if="filter === 'favs'">
      <p> {{taskStore.favCount}} Favourite Tasks</p>
      <hr>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <!-- Non Favourite Tasks -->
    <div v-if="filter === 'nonFavs'">
      <p>{{taskStore.nonFavCount}} Non-Favourite Tasks</p>
      <hr>
      <div v-for="task in taskStore.nonFavs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

  </main>
  
</template>

<script setup>
  /*eslint-disable*/
  import {ref} from 'vue'
  import { useTaskStore } from './store/TaskStore'
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'

  const taskStore = useTaskStore()

  //fetch tasks
  taskStore.getTasks()

  let filter = ref('all')

</script>

<style scoped>
  main{
    width: min(750px, 100%);
  }
  button{
    font-size: 0.825rem;
    padding: 0.175rem 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0.125rem;
    background-color: rgba(0, 0, 0, 0.075);
    cursor: context-menu;
    user-select: none;
  }
  button:hover{
    border-color: rgba(0, 0, 0, 0.75);
  }
  button:active{
    border-color: rgba(0, 0, 0, .5);
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>
