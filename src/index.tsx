import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: #3498db;
  background-color: #f7f9fa;
  border: 1px solid #e3e7e8;
  cursor: pointer;
  :hover {
    background-color: #c8d6dd;
  }
`;

export default Button;
