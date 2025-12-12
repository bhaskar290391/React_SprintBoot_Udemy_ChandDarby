import "./App.css";
import TodoTableItems from "./components/TodoTableItem";

function App() {
  const todoList = [
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
  ];
  return (
    <div className="mt-5 conatiner">
      <div className="card">
        <div className="card-header">Todo's List</div>

        <div className="card-body">
          <TodoTableItems todoList={todoList}></TodoTableItems>
        </div>
      </div>
    </div>
  );
}

export default App;
