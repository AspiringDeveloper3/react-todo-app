import React, { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function makeTodo() {
    setTodos((prevValue) => {
      return [...prevValue, inputVal];
    });
  }

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  return (
    <div className="App">
      <div className="todo">
        <h1>Your Todo List for today</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" placeholder="New to-do" />
        <button onClick={makeTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
