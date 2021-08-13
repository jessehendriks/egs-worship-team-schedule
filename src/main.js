import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './registerServiceWorker';
import './assets/app.css';
import './util/firebase';

library.add(faMoon, faSun);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
