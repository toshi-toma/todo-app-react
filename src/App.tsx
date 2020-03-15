import React, { useState } from "react";

import TodoList, { TodoListType } from "./Todo/TodoList";
import Header from "./Header";

export type Todo = {
  id: number;
  todoTitle: string;
};

const App = () => {
  const [todos, setTodos] = useState<TodoListType>([]);
  const [inputText, setInputText] = useState("");
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
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id,
      todoTitle: inputText
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleComplete = (completeId: number) => {
    const newTodos = todos.filter(t => t.id !== completeId);
    setTodos(newTodos);
  };

  return (
    <>
      <Header
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleNewTodoKeyDown(e)
        }
        inputText={inputText}
      />
      <main>
        <button type="button" onClick={handleSubmit}>
          Add Todo
        </button>
        <TodoList todos={todos} handleComplete={handleComplete} />
      </main>
    </>
  );
};

export default App;
