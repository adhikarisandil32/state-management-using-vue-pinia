/* eslint-disable */

import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStr', {
    state: () => ({
        tasks: [
            //dummy tasks
            {id: 1, title: "run some errands", isFav: false},
            {id: 2, title: "play videogames", isFav: true},
            {id: 3, title: "write some code", isFav: true},
            {id: 4, title: "write an essay", isFav: false}
        ]
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
        totalCount(){
            return this.tasks.length
        }
    },
    //If we need to perform any actions to the data, this is where we do it.
    actions:{
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => {
                return t.id === id
            })
            //'find' returns the first element that meets the condition
            task.isFav = !task.isFav
        }
    }
})