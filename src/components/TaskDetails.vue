<template>
    <div class="flex bg-gray-100 mt-2 rounded-lg items-center">
        <span class="block w-[250px] p-4">{{task.title}}</span>
        <font-awesome-icon icon="fa-solid fa-trash" class="block p-4 text-base text-gray-400 hover:text-gray-500 cursor-pointer" @click="taskStore.deleteTask(task.id)"/>
        <font-awesome-icon icon="fa-solid fa-heart" class="block p-4 text-base text-gray-400 hover:text-gray-500 cursor-pointer" @click="taskStore.toggleFav(task.id)"/>
    </div>
</template>

<script setup>
    /* eslint-disable */
    import {useTaskStore} from '../store/TaskStore'
    let props = defineProps({
        task: Object
    })
    const taskStore = useTaskStore()
</script>

<style>
    *, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>