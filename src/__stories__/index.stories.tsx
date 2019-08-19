import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header from "../Header";
import App from "../App";

storiesOf("normal", module)
  .add("Header", () => <Header onChange={action("clicked")} inputText="" />)
  .add("App", () => <App />);
