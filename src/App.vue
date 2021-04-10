<template>
  <div id="app">
    <Login v-if="!isLoggedin"></Login>

    <Notifications v-if="isLoggedin"></Notifications>
  </div>
</template>

<script>

    import {mapState} from 'vuex';
    import Notifications from './components/notifications';
    import Login from './components/login';
export default {

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Apsssp'
    }
  },
  computed :{
      ...mapState ('loginModule',['isLoggedin','token']),
  },
  mounted() {
      if(localStorage.getItem('token')) {
          this.$store.commit('loginModule/setLogin' , {token:'aaaaaaaaaaaa'});
      }

  },
  components : {
      'Login':Login,
      'Notifications':Notifications

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
