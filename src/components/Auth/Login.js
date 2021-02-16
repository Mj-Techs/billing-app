import React, { useState } from "react";
import { TextField, Grid, Paper, Avatar } from "@material-ui/core";
import validator from "validator";
import { useDispatch } from "react-redux";
import { FormButton } from "../../app-styled";
import swal from "sweetalert";
import { startLoginUser, ToggelStatus } from "../../action/userAction";
const Login = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState({});
  const errors = {};
  const dispatch = useDispatch();
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    margin: "70px auto",
    boxShadow: "0 0 40px",
  };
  const avatarStyle = { background: "green" };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const runValidation = () => {
    // email validation
    if (validator.isEmpty(loginData.email)) {
      errors.email = "email can't be empty";
    } else if (!validator.isEmail(loginData.email)) {
      errors.email = "invalid email formate";
    }
    // password validation
    if (validator.isEmpty(loginData.password)) {
      errors.password = "password can't be empty";
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      const handleRedirect = () => {
        dispatch(ToggelStatus());
        props.history.push("/dashboard");
        swal("superb", "you have successfully loggedIn!", "success");
      };
      dispatch(startLoginUser(loginData, handleRedirect));
    } else {
      setLoginError(errors);
    }
  };
  return (
    <div className="login">
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              error={Boolean(loginError?.email)}
              label="Email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              helperText={loginError?.email}
              type="text"
            />
            <TextField
              fullWidth
              error={Boolean(loginError?.password)}
              label="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
              helperText={loginError?.password}
              type="password"
            />
            <FormButton type="submit">Login</FormButton>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
export default Login;
