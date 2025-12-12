import TodoRowItems from "./TodoRowItems";
function TodoTableItems(props) {
  return (
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
          rowNumber={props.todoList[0].rowNumber}
          rowDescription={props.todoList[0].rowDescription}
          rowAssigned={props.todoList[0].rowAssigned}
        />

        <TodoRowItems
          rowNumber={props.todoList[1].rowNumber}
          rowDescription={props.todoList[1].rowDescription}
          rowAssigned={props.todoList[1].rowAssigned}
        />

        <TodoRowItems
          rowNumber={props.todoList[2].rowNumber}
          rowDescription={props.todoList[2].rowDescription}
          rowAssigned={props.todoList[2].rowAssigned}
        />
      </tbody>
    </table>
  );
}

export default TodoTableItems;
