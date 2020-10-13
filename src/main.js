import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddForm from './components/AddForm'
import Home from './components/Home'
import about from './components/About'
import User from './components/User'
import Show_data from './components/Show_data'
Vue.directive("size", {
  bind(el, binding) {

    if (binding == 'small') {
      el.style.fontSize = "20px"
    }
    else{
      el.style.fontSize = "50px"
    }


  }

})

Vue.use(VueRouter);


const routes = [

  { path: '/', component: Home },
  { path: '/add', component: AddForm },
  { path: '/about', component: about },
  { path: '/user/:id', component: User },
  { path: '/showdata', component: Show_data },

]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
