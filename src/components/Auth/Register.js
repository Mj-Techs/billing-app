import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import PersonAddSharpIcon from "@material-ui/icons/PersonAdd";
import validator from "validator";
import swal from "sweetalert";
import { FormButton } from "../../app-styled";
import { useDispatch } from "react-redux";
import { postUser } from "../../action/userAction";
const Register = (props) => {
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    margin: "30px auto",
    boxShadow: "0 0 50px",
  };
  const avatarStyle = { background: "green" };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    businessName: "",
    address: "",
  });
  const [formError, setFormError] = useState({});
  const errors = {};
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCancelButton = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      businessName: "",
      address: "",
    });
  };
  const runValidation = () => {
    //username validation
    if (validator.isEmpty(formData.username)) {
      errors.username = "username can't be empty";
    } else if (formData.username.length < 5) {
      errors.username = "username must have atleast 5 characters";
    }
    // email validation
    if (validator.isEmpty(formData.email)) {
      errors.email = "email can't be empty";
    } else if (!validator.isEmail(formData.email)) {
      errors.email = "invalid email formate";
    }
    // password validation
    if (validator.isEmpty(formData.password)) {
      errors.password = "password can't be empty";
    } else if (formData.username.length < 5) {
      errors.password = "password must have atleast 8-15 characters";
    }
    //Business validation
    if (validator.isEmpty(formData.businessName)) {
      errors.business = "business can't be empty";
    }

    //address validation
    if (validator.isEmpty(formData.address)) {
      errors.address = "address can't be empty";
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      const handleRedirect = () => {
        props.history.push("/login");
        swal("superb", "you have successfully Registered!", "success");
      };
      dispatch(postUser(formData, handleRedirect));
      setFormData({
        username: "",
        email: "",
        password: "",
        businessName: "",
        address: "",
      });
    } else {
      setFormError(errors);
    }
  };
  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <PersonAddSharpIcon />
            </Avatar>
            <h2>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to Register yourself
            </Typography>
          </Grid>
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              error={Boolean(formError?.username)}
              label="Name"
              name="username"
              placeholder="Enter your name"
              helperText={formError?.username}
              value={formData.username}
              onChange={handleChange}
              type="text"
            />
            <TextField
              fullWidth
              error={Boolean(formError?.email)}
              label="Email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              helperText={formError?.email}
              type="text"
            />
            <TextField
              fullWidth
              error={Boolean(formError?.password)}
              label="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              helperText={formError?.password}
              type="password"
            />
            <TextField
              fullWidth
              error={Boolean(formError?.business)}
              label="Business"
              name="businessName"
              placeholder="Enter Bussiness name"
              value={formData.businessName}
              onChange={handleChange}
              helperText={formError?.business}
              type="text"
            />
            <TextareaAutosize
              placeholder="fill your address"
              name="address"
              rowsMin={4}
              cols={43}
              value={formData.address}
              onChange={handleChange}
              style={{
                marginTop: "10px",
                borderColor: formError.address ? "red" : "black",
              }}
            />
            {formError.address && (
              <p style={{ fontSize: "12px", color: "red" }}>
                {formError.address}
              </p>
            )}
            <FormButton type="submit">Register</FormButton>
            <FormButton primary onClick={handleCancelButton}>
              Cancel
            </FormButton>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
