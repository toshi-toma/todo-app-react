import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DoneButton from "../DoneButton";
import Todo from "../Todo";
import TodoList, { TodoListType } from "../TodoList";

const todos: TodoListType = [
  { id: 1, todoTitle: "task1" },
  { id: 2, todoTitle: "task2" },
  { id: 3, todoTitle: "task3" },
  { id: 4, todoTitle: "task4" }
];

storiesOf("Todo", module)
  .add("Done Button", () => <DoneButton handleClick={action("clicked")} />)
  .add("Todo", () => <Todo todo="My Todo" handleComplete={action("clicked")} />)
  .add("Todo List", () => (
    <TodoList todos={todos} handleComplete={action("clicked")} />
  ));
