import { useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { ToggelStatus } from "../../action/userAction";
const Logout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(ToggelStatus());
    props.history.push("/");
    swal("Hey", "You have successfully loggedout!", "success");
  }, [dispatch, props.history]);
  return null;
};

export default Logout;
