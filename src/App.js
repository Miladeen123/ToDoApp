import React, { useState } from "react";
import data from "./TestData.json";
//components
import Header from "./Header";
import ToDoList from "./todolist";
import "./App.css";

// test pull

function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
