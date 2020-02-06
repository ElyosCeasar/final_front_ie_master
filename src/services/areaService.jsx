import axios from "axios";
import authService from "./authService";
class areaService {
  // url = "http://localhost:5000";
  url = "https://final-ie-back.herokuapp.com";
  authServices = new authService();
  getAllAreasNameForPoligon = poligon => {
    return axios.post(
      this.url + "/api/area/getAllAreasNameForPoligon",
      poligon,
      this.authServices.getTokenForSend()
    );
  };
}

export default areaService;
