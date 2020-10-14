<template>
  <div id="app" style="margin-top:0px;">
    <Navbar />
    <!-- <component v-bind:is="cmp"></component>
    <button @click="changecmp();">Change Component</button>  -->

    <router-view></router-view>
  </div>
</template>

<script>
//import Signin from "./components/Signin.vue";
//import AddForm from "./components/AddForm.vue";
// import showapi from  "./components/Show_data.vue"
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    //Signin,
    //AddForm,
    //  showapi,
    Navbar,
  },
  // data(){

  //   return{cmp:Signin}
  // },
  // methods:
  // {
  //   changecmp()
  //   {
  //     this.cmp=AddForm;
  //   }

  // }
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
