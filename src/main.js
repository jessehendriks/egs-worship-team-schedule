import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store'
import './assets/app.css';
import './util/firebase';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
