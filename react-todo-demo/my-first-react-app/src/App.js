import "./App.css";

function App() {
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
