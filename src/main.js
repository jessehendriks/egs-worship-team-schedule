import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './registerServiceWorker';
import './assets/app.scss';

library.add(faMoon, faSun, faPlus, faTimesCircle);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
