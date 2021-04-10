
import userJson from '../../users.json';
import invitationJson from '../../invitation.json';
import invitationUpdateJson from '../../invitationUpdate.json';
import {mapState} from 'vuex';
export  default  {
  ...mapState ('loginModule',['invitejson' , 'inviteupdatjson']),
  data() {
    return {
      userData : userJson,
      invitationJson :invitationJson,
      invitationUpdateJson:invitationUpdateJson
    }
  },
  mounted() {
    this.$store.commit('loginModule/setshowjson' , {data: invitationJson});
  }
}
