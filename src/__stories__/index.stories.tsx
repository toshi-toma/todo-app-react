import React from "react";

import { storiesOf } from "@storybook/react";
import Header from "../Header";
import App from "../App";
import Main from "../Main";

storiesOf("normal", module)
  .add("Header", () => <Header />)
  .add("App", () => <App />)
  .add("Main", () => <Main />);
