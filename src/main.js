import Vue from 'vue'
import App from './App.vue'
import VueGeoLocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router'
import AddForm from './components/AddForm'
import Home from './components/Home'
import about from './components/About'
import User from './components/User'
import showapi from './components/Show_data'
import Map from './components/Map'




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
Vue.use(VueGeoLocation);


Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyAf9mwc-FqKONtCae9zD4b4LTL1DmR0l-E'
  },
 
})

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddForm },
  { path: '/about', component: about },
  { path: '/user/:id', component: User },
  { path: '/showapi', component: showapi },
  { path: '/map', component: Map },  

]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
