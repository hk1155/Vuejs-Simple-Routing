<template>
  <div>
    <h4>Fetch Data From API</h4>
    <button @click="getData()" v-if="btnshow" class="btn btn-success">Show Data</button>&nbsp;
   <button @click="hidedata()" v-if="btnhide" class="btn btn-danger">Hide Data</button>
    <div class="container" v-if="showdata">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
         <tr v-for="mydata in apidata" :key="mydata.id">
           <td>{{mydata.id}}</td>
           <td>{{mydata.name}}</td>
           <td>{{mydata.username}}</td>
           <td>{{mydata.email}}</td>
         </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "showapi",
  data() {
    return {
      showdata:false,
      btnhide:false,
      btnshow:true,
      apidata: [],
    };
  },
  methods: {
    getData() {
      this.showdata=true
      this.btnhide=true
      this.btnshow=false
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (this.apidata = data));
        
    },
    hidedata()
    {
      this.showdata=false;
      this.btnhide=false;
      this.btnshow=true;
    }
  },
};
</script>