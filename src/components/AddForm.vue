<template>
  <div>
    <h3>Input Data Form</h3>
    <div class="alert alert-danger" v-if="showerrmsg">{{ errmsg }}</div>

    <input type="text" v-model="txtname" placeholder="Enter Name" />
    <button @click="addUser()">Save Record</button>
  </div>
</template>
<script>
export default {
  name: "AddForm",
  data(){  
      
      return{
          txtname:null,
          showerrmsg:false,
          errmsg:'This is Error Message',
          }
      
  },
  methods:{

      addUser()
      {
         if(this.txtname==null)
         {
             alert('Field is Null');
         }
         else
         {
             alert("OK");
         }
      }
  }
};
</script>