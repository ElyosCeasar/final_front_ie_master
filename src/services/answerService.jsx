import axios from "axios";
import authService from "./authService";
class appService {
  // url = "http://localhost:5000";
  url = "https://final-ie-back.herokuapp.com";
  authServices = new authService();
  postComplitedFormByClient = (ComplitedForm, id) => {
    return axios.post(
      this.url + "/api/answer/" + id,
      ComplitedForm,
      this.authServices.getTokenForSend()
    );
  };
  getById = id => {
    return axios.get(
      this.url + "/api/answer/" + id,
      this.authServices.getTokenForSend()
    );
  };
  getAllAnswersByFormId = id => {
    return axios.get(
      this.url + "/api/answer/getAllAnswersByFormId/" + id,
      this.authServices.getTokenForSend()
    );
  };
  getAnswerStatesticByFormId = id => {
    return axios.get(
      this.url + "/api/answer/getAnswerStatesticByFormId/" + id,
      this.authServices.getTokenForSend()
    );
  };
  filterAnswersForGrid = (searchItems, formId) => {
    return axios.post(
      this.url + "/api/answer/filterAnswersForGrid/ " + formId,
      searchItems,
      this.authServices.getTokenForSend()
    );
  };
}

export default appService;
