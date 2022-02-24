import React, { useRef } from "react";
import { fileUpload } from "../helpers/storage";

function AddTask() {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fileUpload(fileInput.current.files[0]);
  };

  return (
    <div className="task-form">
      <div className="form-input">
        <form onSubmit={handleSubmit}>
          <input
            name="upload"
            type="file"
            ref={fileInput}
            // accept="image/*,pdf/*"
            required
          />
          <label htmlFor="upload image" className="label-name">
            <span className="content-name">Choose image</span>
          </label>
          <br />
          <div className="btn">
            <button title="submit" aria-label="submit" type="submit">
              Upload image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
