import React, { useState } from "react";

import TodoList from "./Todo/TodoList";

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
    <div>
      <header>
        <h1>ToDo App</h1>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleNewTodoKeyDown(e)
          }
          placeholder="Your Todos"
          value={inputText}
        />
        <button type="button" onClick={handleSubmit}>
          Add Todo
        </button>
      </header>
      <main>
        <TodoList todos={todos} handleComplete={handleComplete} />
      </main>
    </div>
  );
};

export default App;
