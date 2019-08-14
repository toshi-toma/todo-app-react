import React, { useState } from "react";

import TodoList from "./Todo/TodoList";
import Header from "./Header";

const App = () => {
  const [todos, setTodos] = useState([] as string[]);
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
    setTodos([...todos, inputText]);
    setInputText("");
  };

  const handleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
