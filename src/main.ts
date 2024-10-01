import '@/css/main.scss'
import '@/css/quasar.variables.sass'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import { Quasar } from 'quasar'
import { createApp } from 'vue'
import quasarUserOptions from '@/quasar-user-options'

const app = createApp(App)

app.use(Quasar, quasarUserOptions)

app.mount('#app')
