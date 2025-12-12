import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
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

  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if (todoList.length > 0) {
      rowNumber = todoList[todoList.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodoList = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };

    setTodoList((todoList) => [...todoList, newTodoList]);
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

          <NewTodoForm addTodo={addTodo}></NewTodoForm>
        </div>
      </div>
    </div>
  );
}
export default App;
