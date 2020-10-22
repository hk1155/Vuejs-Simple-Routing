<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">My Vue</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Home</a></li>
        <li><router-link to="/showapi">Show data</router-link></li>
        <li><router-link to="/add">Insert Data</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/map">Google Map</router-link></li>
        
        
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>