import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../index";
import Header from "../Header";
import App from "../App";

storiesOf("normal", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Header", () => <Header onChange={action("clicked")} inputText="" />)
  .add("App", () => <App />);
