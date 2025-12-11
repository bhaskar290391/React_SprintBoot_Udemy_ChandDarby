function TodoRowItems() {
  const rowNumber = 1;
  const rowDescription = "Feeding Dog";
  const rowAssigned = "Eric Robby";
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItems;
