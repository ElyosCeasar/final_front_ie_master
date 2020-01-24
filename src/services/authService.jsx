import axios from "axios";
var jwt = require("jsonwebtoken");
class authService {
  url = "http://localhost:5000";
  //url = "http://hw2-ie-back-master.herokuapp.com";
  tokenName = "token";

  checkIfTokenIsExpired() {
    var isExpired = false;

    var decodedToken = this.getDecodedToken();
    const secondsSinceEpoch = Math.round(Date.now() / 1000);

    if (decodedToken.payload.exp < secondsSinceEpoch) {
      isExpired = true;
    }
    return isExpired;
  }
  getDecodedToken() {
    const token = localStorage.getItem(this.tokenName);
    var decodedToken = jwt.decode(token, { complete: true });
    return decodedToken;
  }
  logUserOutInExpirtim() {
    const refreshIntervalId = setInterval(() => {
      if (this.isTokenExist() && this.checkIfTokenIsExpired()) {
        this.logout();
      }
    }, 10000);
  }
  getRole() {
    console.log(this.getDecodedToken);
    return this.getDecodedToken().payload.Role;
  }
  logout() {
    localStorage.removeItem(this.tokenName);
    window.location.reload();
  }
  login(val) {
    this.signIn(val.username, val.password)
      .then(res => {
        if (res !== null) {
          localStorage.setItem(this.tokenName, res.data);
          window.location.reload();
        }
      })
      .catch(function(error) {
        alert(error.response.data);
      });

    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiZmllbGRBZ2VudCIsInVzZXJuYW1lIjoiSm9obiBEb2UiLCJleHAiOjE1Nzk4MTQ1MDUwfQ.7nBllYKIYHoJDvuJvagxVviyFshKCSo51A7ptkI-JgI"
  }
  isTokenExist() {
    return localStorage.getItem(this.tokenName) !== null;
  }
  getTokenForSend() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(this.tokenName)}`
      }
    };
    return config;
  }
  //service out
  signIn(username, password) {
    const loginInfo = {
      username: username,
      password: password
    };
    return axios.post(this.url + "/api/auth/login", loginInfo);
  }
}

export default authService;
