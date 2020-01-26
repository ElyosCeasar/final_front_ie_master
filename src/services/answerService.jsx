import axios from "axios";
import authService from "./authService";
class appService {
  url = "http://localhost:5000";
  //url = "http://hw2-ie-back-master.herokuapp.com";
  authServices = new authService();
  postComplitedFormByClient = (ComplitedForm, id) => {
    return axios.post(
      this.url + "/api/answer/" + id,
      ComplitedForm,
      this.authServices.getTokenForSend()
    );
  };
  getAllAnswersByFormId = id => {
    return axios.get(
      this.url + "/api/answer/getAllAnswersByFormId/" + id,
      this.authServices.getTokenForSend()
    );
  };
}

export default appService;
