import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

function App() {
  const initialTodos: Todo[] = [
    { text: "Walk the dog", complete: false },
    { text: "Write App", complete: true },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <>
      <ul>
        <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
        <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
      </ul>
    </>
  );
}

export default App;
