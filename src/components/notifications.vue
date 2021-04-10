<template>
<div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(item, index) in data">
      <notification :index="index" :item="item" ></notification>
    </li>
  </ul>
  <Logout></Logout>
</div>


</template>


<script>
    import getJsonMixin from  '../mixins/getJson.js';
    import {mapState} from 'vuex'
    import Notification from './notification';
    import Logout from './logut';
    export default {
        name: 'not',
        mixins: [getJsonMixin],

        data () {
            return {

            }
        },
        mounted() {
            let self = this;
            setTimeout(function(){
                self.$store.commit('loginModule/setshowjson' , {data: self.invitationUpdateJson});
            }, 5000);
        },
        computed :{
            ...mapState ('loginModule',['showjson']),
          data(){
              return this.showjson;
          }
        },
        methods : {

        },
        components : {
            'notification' : Notification,
            'Logout':Logout
        }
    }

</script>
