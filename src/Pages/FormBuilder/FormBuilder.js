import React, { useEffect, useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import { v4 as uuidv4 } from "uuid";

export default function FormBuilder() {
  const [form, setForm] = useState(null);
  const [formName, setFormName] = useState(null);

  const handleCreateForm = () => {
    if (form) {
      const dataToSend = {
        formID: uuidv4(),
        formName,
        formData: form,
      };
      //submit to backend
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setFormName(e.target.value)} />
      <ReactFormBuilder
        onPost={(e) => {
          setForm(e.task_data);
        }}
      />
      <button onClick={handleCreateForm}>Create form</button>
    </div>
  );
}
