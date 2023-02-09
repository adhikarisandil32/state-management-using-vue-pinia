/* eslint-disable */

import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStr', {
    state: () => ({
        tasks: [],
        loading: false
    }),
    //we recieve data to other components as it is or after being manipulated as requirement. It is to be used only as a tool to provide data.
    getters: {
        favs(){
            return this.tasks.filter(t => t.isFav)
        },
        nonFavs(){
            return this.tasks.filter(t => !t.isFav)
        },
        //using arrow function is not diserable as it might cause problems with 'this'
        favCount(){
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p+1 : p
            }, 0)
        },
        nonFavCount(){
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p : p+1
            }, 0)
        },
        //if to be used, arrow functions can be used as such
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    //If we need to perform any actions to the data, this is where we do it.
    actions:{
        async getTasks(){
            this.loading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.loading = false
        },
        async addTask(task){
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type':'application/json'}
            })

            if(res.error){
                console.log(res.error)
            }

        },
        async deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/'+id, {
                method: 'DELETE'
            })

            if(res.error){
                console.log(res.error)
            }
        },
        async toggleFav(id){

            const task = this.tasks.find(t => {
                return t.id === id
            })
            //'find' returns the first element that meets the condition
            task.isFav = !task.isFav

            const res = await fetch('http://localhost:3000/tasks/'+id, {
                method: 'PATCH',
                body: JSON.stringify({ isFav: task.isFav}),
                headers: {'Content-Type':'application/json'}
            })

            if(res.error){
                console.log(res.error)
            }
        }
    }
})