import Vue from 'vue'
import VueRouter from 'vue-router'
import AddForm from './components/AddForm'
import Table from './components/Table'
import about from './components/About'

Vue.use(VueRouter);

const routes=[

    {path:'/', component:Table},
    {path:'/add', component:AddForm},
    {path:'/about', component:about},
  
  ]

  const router =new VueRouter({
    routes
  })