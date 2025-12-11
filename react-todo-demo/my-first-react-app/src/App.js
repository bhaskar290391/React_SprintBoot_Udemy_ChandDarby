import "./App.css";
import TodoRowItems from "./components/TodoRowItems";

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
  ];
  return (
    <div className="mt-5 conatiner">
      <div className="card">
        <div className="card-header">Todo's List</div>

        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItems
                rowNumber={todoList[0].rowNumber}
                rowDescription={todoList[0].rowDescription}
                rowAssigned={todoList[0].rowAssigned}
              />

              <TodoRowItems
                rowNumber={todoList[1].rowNumber}
                rowDescription={todoList[1].rowDescription}
                rowAssigned={todoList[1].rowAssigned}
              />

              <TodoRowItems
                rowNumber={todoList[2].rowNumber}
                rowDescription={todoList[2].rowDescription}
                rowAssigned={todoList[2].rowAssigned}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
