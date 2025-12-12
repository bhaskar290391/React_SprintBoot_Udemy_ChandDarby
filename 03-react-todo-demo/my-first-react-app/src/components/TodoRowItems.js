function TodoRowItems(props) {
  return (
    <tr onClick={() => props.deleteTodoList(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItems;
