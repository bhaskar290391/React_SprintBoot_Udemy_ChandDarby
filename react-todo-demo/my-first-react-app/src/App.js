import "./App.css";
import TodoTableItems from "./components/TodoTableItem";
import React, { useState } from "react";

function App() {
  // const todoList = [
  //   {
  //     rowNumber: 1,
  //     rowDescription: "Feeding Puppy",
  //     rowAssigned: "User One",
  //   },
  //   {
  //     rowNumber: 2,
  //     rowDescription: "Water Plant",
  //     rowAssigned: "User Two",
  //   },
  //   {
  //     rowNumber: 3,
  //     rowDescription: "Make Dinner For Puppy",
  //     rowAssigned: "User One",
  //   },
  //   {
  //     rowNumber: 4,
  //     rowDescription: "Charging the Phone Battery",
  //     rowAssigned: "User One",
  //   },
  // ];

  const [todoList, setTodoList] = useState([
    {
      rowNumber: 1,
      rowDescription: "Feeding Puppy",
      rowAssigned: "User One",
    },
    {
      rowNumber: 2,
      rowDescription: "Water Plant",
      rowAssigned: "User Two",
    },
    {
      rowNumber: 3,
      rowDescription: "Make Dinner For Puppy",
      rowAssigned: "User One",
    },
    {
      rowNumber: 4,
      rowDescription: "Charging the Phone Battery",
      rowAssigned: "User One",
    },
  ]);

  const addTodo = () => {
    if (todoList.length > 0) {
      const newTodoList = {
        rowNumber: todoList.length + 1,
        rowDescription: "New Todo",
        rowAssigned: "User Threee",
      };

      setTodoList((todoList) => [...todoList, newTodoList]);
    }
  };
  return (
    <div className="mt-5 conatiner">
      <div className="card">
        <div className="card-header">Todo's List</div>

        <div className="card-body">
          <TodoTableItems todoList={todoList}></TodoTableItems>
          <button className="btn btn-primary" onClick={addTodo}>
            Add TodoList
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
