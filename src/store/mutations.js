export default {
  setLogin(state, payload) {
    state.isLoggedin = true;
    state.token = payload.token;
    localStorage.setItem('token' ,payload.token)
  },
  setshowjson(state, payload) {
    state.showjson = payload.data.invites;
  },
  setLogout(state,payload) {
    state.isLoggedin = false;
    state.token = null;
    localStorage.removeItem('token');
  }
};
