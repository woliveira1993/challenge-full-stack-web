import { registerPlugins } from '@/plugins'

import App from './App.vue'
import store from './store/index';

import { createApp } from 'vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App).use(store);
app.use(Toast);

registerPlugins(app);

app.mount('#app')
