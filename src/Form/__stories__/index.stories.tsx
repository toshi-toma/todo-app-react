import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import InputForm from "../InputForm";

storiesOf("Form", module).add("Input Form", () => (
  <InputForm
    handleSubmit={action("submited")}
    onChange={action("clicked")}
    placeholder="Your Todos"
    value=""
  />
));
