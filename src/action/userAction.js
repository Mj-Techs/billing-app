import axios from "../Config/axios";
import swal from "sweetalert";

export const postUser = (data, handleRedirect) => {
  return (dispatch) => {
    axios
      .post("/users/register", data)
      .then((response) => {
        const result = response.data;
        if (result?.keyValue?.username) {
          swal("sorry!", "this username has already taken", "error");
        } else if (result?.keyValue?.email) {
          swal("sorry!", "this email has already exist", "error");
        } else {
          handleRedirect();
        }
      })
      .catch((err) => alert(err.message));
  };
};

export const ToggelStatus = () => {
  return { type: "TOGGLE_STATUS" };
};

export const startLoginUser = (data, handleRedirect) => {
  return (dispatch) => {
    axios.post("/users/login", data).then((response) => {
      const result = response.data;
      if (result?.errors) {
        swal("sorry!", "Invalid email or Password", "error");
      } else {
        localStorage.setItem("token", result.token);
        handleRedirect();
      }
    });
  };
};
//admin acccount
const adminAccount = (data) => {
  return { type: "GET_ACCOUNT", payload: data };
};

export const startGetAccount = () => {
  return (dispatch) => {
    axios
      .get("/users/account", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(adminAccount(result));
      })
      .catch((err) => alert(err.message));
  };
};
