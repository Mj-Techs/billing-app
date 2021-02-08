import axios from "axios";

export default axios.create({
  baseURL: "https://dct-billing-app.herokuapp.com/api",
});
