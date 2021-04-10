import actions from './actions';
import mutations from './mutations';

const state = {
  isLoggedin: false,
  token : null,
  showjson:[]
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
