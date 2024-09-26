import { createApp,Vue  } from 'vue'
import App from './App.vue'
import router from './router'

//chatgpt說boostrap-vue支持的是boostrap4，不支持boostrap5
//boostrap-vue-3支持boostrap5
import { BootstrapVue3 } from 'bootstrap-vue-3'

// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 引入 Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 引入 material kit 2

// import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
import "./assets/css/nucleo-icons.css"
// import "https://kit.fontawesome.com/42d5adcbca.js"
import "./assets/css/material-kit.min.css"
//引入 Boostrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).use(BootstrapVue3).mount('#app')
