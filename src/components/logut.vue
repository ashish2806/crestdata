<template>
<div>
  <button @click="LogoutHandler" >Logout</button>
</div>

  </template>


  <script>
import {mapState} from 'vuex';
export default {
  name: 'logout',
  data () {
    return {

    }
  },
  computed :{
  },
  methods : {
    LogoutHandler() {
      this.$store.commit('loginModule/setLogout');
    }
  },
  components : {

  }
}

</script>

<style>
/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

</style>
