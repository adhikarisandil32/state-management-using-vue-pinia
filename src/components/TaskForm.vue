<template>
    <form @submit.prevent="handleSubmit">
        <input
            type="text"
            placeholder="I need to..."
            v-model="newTask"
        >
        <button>Add Task</button>
    </form>
</template>

<script setup>
    /* eslint-disable */
    import { useTaskStore } from '../stores/TaskStore'
    import {ref} from 'vue'

    const taskStore = useTaskStore()
    const newTask = ref('')

    const handleSubmit = () => {
        
    }
</script>

<style>
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