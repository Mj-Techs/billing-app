import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 0.1fr 1fr/ 1fr;
  background-image: linear-gradient(to right top, white, white);
  background-size: cover;
  backdrop-filter: blur;
  font-family: sans-serif;
  font-weight: 700;
  overflow-x: hidden;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: blue;
  font-size: 1.4rem;
`;
export const Main = styled.div`
  height: 100%;
`;
export const StyledLink = styled(Link)`
  margin-top: 20px;
  margin-right: 30px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  outline: none;
  &:hover {
    color: red;
  }
`;
export const ViewLink = styled(StyledLink)`
  color: blue;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const FormButton = styled.button`
  margin-right: 30px;
  margin-top: 20px;
  box-shadow: none;
  text-transform: none;
  font-size: 1.1rem;
  padding: 6px 12px;
  border: 1px solid;
  line-height: 1.5;
  background: ${(props) => (props.primary ? "red" : "green")};
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  color: white;
`;
