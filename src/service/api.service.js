import axios from "axios";
const API_URL = process.env.REACT_APP_API_BASE_URL;
const token = process.env.REACT_APP_HEADER_TOKEN;

class ApiService {
  displayHouse() {
    return axios.get(API_URL + `houses?populate=plans`, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  }

  getHouseById(id) {
    return axios.get(API_URL + `houses/${id}?populate=plans`, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  }
}
export default new ApiService();
