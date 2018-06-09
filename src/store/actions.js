import SignService from "../service/sign";
import Cookie from "../service/cookie";

const actions = {
  isLoading({ commit }, flag) {
    commit("isLoading", flag);
  },
  getToken({ commit }) {
    let email = SignService.getEmail();
    SignService.getToken(email).then(res => {
      if (res !== null && res !== undefined) {
        Cookie.setCookie("token", res.token);
        commit("isLoading", false);
        window.location.href="/list";
      } else {
        SignService.getUsername(email).then(info => {
          SignService.register(info.username, email).then(res => {
            SignService.getToken(email).then(res => {
              Cookie.setCookie("token", res.token);
              commit("isLoading", false);
              window.location.href="/list";
            });
          });
        });
      }
    });
  },
  setToken({ commit }) {
    let token = Cookie.getCookie("token");
    commit("setToken", token);
    commit("isLogin");
  }
};

export default actions;
