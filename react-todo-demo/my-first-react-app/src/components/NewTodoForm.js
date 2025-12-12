function NewTodoForm() {
  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input type="text" className="form-control" required></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" required rows={3}></textarea>
        </div>

        <button type="button" className="btn btn-primary">
          Add Todo Form
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
