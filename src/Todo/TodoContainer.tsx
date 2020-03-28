import React from "react";

import TodoList, { TodoListType } from "./TodoList";
import InputForm from "../Form/InputForm";

export type Todo = {
  id: number;
  todoTitle: string;
};

const TodoContainer = () => {
  const [todos, setTodos] = React.useState<TodoListType>([]);
  const [inputText, setInputText] = React.useState("");
  const handleNewTodoKeyDown = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (val) {
      setInputText(val);
    }
  };
  const handleSubmit = () => {
    if (!inputText) {
      return;
    }

    const inputTodos = inputText.split("  ");

    const firstTaskId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodos = inputTodos.map((inputTodo, index) => ({
      id: firstTaskId + index,
      todoTitle: inputTodo
    }));

    setTodos([...todos, ...newTodos]);
    setInputText("");
  };

  const handleComplete = (completeId: number) => {
    const newTodos = todos.filter(t => t.id !== completeId);
    setTodos(newTodos);
  };

  return (
    <>
      <InputForm
        handleSubmit={handleSubmit}
        onChange={handleNewTodoKeyDown}
        placeholder="Your Todos"
        value={inputText}
      />
      <button type="button" onClick={handleSubmit}>
        Add Todo
      </button>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </>
  );
};

export default TodoContainer;
