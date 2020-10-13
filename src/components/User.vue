<template>
  <div>
   <h2>User List</h2>
   <p>UserID is:{{UserId}}</p>
  </div>
</template>
<script>
export default {
  name: "User",
  data(){
    return{UserId:this.$route.params.id}
  }
};
</script>