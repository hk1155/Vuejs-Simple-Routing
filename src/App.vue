<template>
  <div id="app">

  <!-- <Show_data/> -->
    <component v-bind:is="cmp"></component>
    <button @click="changecmp();">Change Component</button> 

     <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About Us</router-link>
        </li>
        <li>
          <router-link to="/add">Insert</router-link>
        </li>
         <li>
          <router-link to="/showdata">Show Data</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Signin from "./components/Signin.vue";
import AddForm from "./components/AddForm.vue";
//import Show_data from  "./components/Show_data.vue"
export default {
  name: "App",
  components: {
    Signin,
    AddForm,
    // Show_data
  },
  data(){

    return{cmp:Signin}
  },
  methods:
  {
    changecmp()
    {
      this.cmp=AddForm;
    }

  }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
