import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DoneButton from "../DoneButton";
import Todo from "../Todo";
import TodoList from "../TodoList";

const todos = ["task1", "task2", "task3", "task4"];

storiesOf("Todo", module)
  .add("Done Button", () => <DoneButton onClick={action("clicked")} />)
  .add("Todo", () => <Todo todo="My Todo" handleComplete={action("clicked")} />)
  .add("Todo List", () => (
    <TodoList todos={todos} handleComplete={action("clicked")} />
  ));
