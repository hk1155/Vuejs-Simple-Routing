<template>
    <div>
        <h4>Post Form Data to API</h4><hr>
        <form @submit="InsertData()" method="post">
            <input type="text" name="txtfname" placeholder="Enter First Name">
            <input type="text" name="txtlname" placeholder="Enter Last Name">
            <input type="submit" value="Insert">
        </form>
    </div>
</template>
<script>
export default {
    name:'Postapi',
    data(){

        return{

        }
    },
    methods:
    {
        InsertData()
        {
            alert('test Ok');
        }
    }
}
</script>