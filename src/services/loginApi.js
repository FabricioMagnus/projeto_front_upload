import api from "./api";

export default class Login {
  static login = async (body) => {
    const response = await api.post("/Login", body);
    return response.data;
  };
}
