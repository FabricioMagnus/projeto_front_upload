import api from "./api";

export default class Upload {
  static uploadFile = async (document) => {
    // let form = new FormData();
    // form.append("file", document);
    const response = await api.post("/Upload", document);
    return response.data;
  };
}
