import React, { FC } from "react";
import styled from "styled-components";

import Todo from "./Todo";

const List = styled.ul``;

interface Props {
  todos: string[];
  handleComplete: (i: number) => void;
}

const TodoList: FC<Props> = ({ todos, handleComplete }) => (
  <List>
    {todos.map((todo, i) => (
      <Todo todo={todo} handleComplete={() => handleComplete(i)} />
    ))}
  </List>
);

export default TodoList;
