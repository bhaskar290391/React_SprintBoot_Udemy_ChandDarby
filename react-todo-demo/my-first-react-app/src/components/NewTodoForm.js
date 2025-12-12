import React, { useState } from "react";

function NewTodoForm() {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            value={assigned}
            onChange={(e) => setAssigned(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary">
          Add Todo Form
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
