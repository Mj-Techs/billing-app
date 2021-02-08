import React from "react";
import { useSelector } from "react-redux";
import { StyledLink } from "../../app-styled";
const Sidebar = () => {
  const status = useSelector((state) => state.status);
  return (
    <>
      {!status ? (
        <div className="sidebar__before__login">
          <div>
            <StyledLink to="/">Home</StyledLink>
          </div>
          <div className="auth">
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="login">Login</StyledLink>
          </div>
        </div>
      ) : (
        <div className="sidebar__after__login">
          <div>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
          </div>
          <div className="link__style">
            <StyledLink to="/customer">Customer</StyledLink>
            <StyledLink to="/product">Product</StyledLink>

            <StyledLink className="bill_link" to="/bill">
              Billing
            </StyledLink>
            <StyledLink className="bill_link" to="/allbill">
              AllBill
            </StyledLink>
          </div>
          <div className="link__style">
            <StyledLink to="/profile">Profile</StyledLink>
            <StyledLink to="/logout">Logout</StyledLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
