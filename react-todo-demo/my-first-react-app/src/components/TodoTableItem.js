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
        {props.todoList.map((todo) => (
          <TodoRowItems
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTableItems;
