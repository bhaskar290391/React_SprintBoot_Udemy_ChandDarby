import "./App.css";

function App() {
  return (
    <div>
      <div>
        <div>Todo's List</div>

        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Feeding Animal</td>
                <td>Eric Robby</td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Haircut</td>
                <td>Eric Robby</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
