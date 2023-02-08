import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faHeart)


createApp(App).use(createPinia()).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
