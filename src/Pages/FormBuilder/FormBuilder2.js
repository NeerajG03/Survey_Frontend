import React, { useEffect, useState } from "react";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

export default function FormBuilder2() {
  const [form, setForm] = useState(null);
  const [showForm, setShowForm] = useState(false);

  //MAKES A POST REQ TO SERVER, SO RUN A SERVER ON /API/FORMDATA, FOR SAVING AND RETRIEVING FORM

  return (
    <div>
      {!showForm && (
        <ReactFormBuilder
          onChange={() => console.log("changed!!!")}
          onSubmit={() => console.log("Submitted!!!")}
          onPost={(e) => {
            setForm(e.task_data);
          }}
        />
      )}
      {showForm && <ReactFormGenerator data={form} />}
      <button onClick={() => setShowForm((prev) => !prev)}>Show form</button>
    </div>
  );
}
