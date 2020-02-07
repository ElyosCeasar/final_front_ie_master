import axios from "axios";
import authService from "./authService";
class appService {
  // url = "http://localhost:5000";
  url = "https://final-ie-back.herokuapp.com";
  authServices = new authService();
  getAllForms = () => {
    return axios.get(
      this.url + "/api/forms",
      this.authServices.getTokenForSend()
    );
  };
  getSpeceficFormById = id => {
    return axios.get(
      this.url + "/api/forms/" + id,
      this.authServices.getTokenForSend()
    );
  };
  postNewForm = newForm => {
    return axios.post(
      this.url + "/api/forms",
      newForm,
      this.authServices.getTokenForSend()
    );
  };
  postComplitedFormByClient = (ComplitedForm, id) => {
    return axios.post(
      this.url + "/api/answer/" + id,
      ComplitedForm,
      this.authServices.getTokenForSend()
    );
  };
}

export default appService;
//http://final-ie-front.herokuapp.com/ | https://git.heroku.com/final-ie-front.git
