import React, { FC } from "react";
import styled from "styled-components";

import Todo from "./Todo";

const List = styled.ul`
  list-style: none;
`;

type Todo = {
  id: number;
  todoTitle: string;
};

export type TodoListType = Todo[];

interface Props {
  todos: TodoListType;
  handleComplete: (id: number) => void;
}

const TodoList: FC<Props> = ({ todos, handleComplete }) => (
  <List>
    {todos.map(todo => (
      <Todo
        todo={todo.todoTitle}
        handleComplete={() => handleComplete(todo.id)}
        key={todo.id}
      />
    ))}
  </List>
);

export default TodoList;
