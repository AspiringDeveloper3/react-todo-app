import React, { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const tickClass = `fas fa-check-square complete-btn`;
  const crossClass = `fas fa-times cross-btn`;

  function makeTodo(event) {
    setTodos((prevValue) => {
      return [...prevValue, inputVal];
    });
    event.target.parentElement.children[0].value = "";
  }

  function deleteTodo(event) {
    event.target.parentElement.classList.add("delete");
  }

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  function completeTodo(event) {
    setChecked((prevValue) => !prevValue);
    console.log(event.target.classList[1]);
    if (event.target.classList[1] === "fa-check-square") {
      event.target.classList = crossClass;
      event.target.parentElement.children[0].style.textDecoration =
        "line-through";
      event.target.parentElement.children[0].style.background = "#8ea6ad";
    } else if (event.target.classList[1] === "fa-times") {
      event.target.classList = tickClass;
      event.target.parentElement.children[0].style.textDecoration = "none";
      event.target.parentElement.children[0].style.background = "";
    }
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
          return (
            <div className="todo-item">
              <li
                style={{
                  textDecoration: "none",
                  background: "",
                  transition: `all 0.4s ease`,
                }}
              >
                {todo}
              </li>
              <i onClick={completeTodo} className={tickClass}></i>
              <i onClick={deleteTodo} className="fas fa-trash trash-btn"></i>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
