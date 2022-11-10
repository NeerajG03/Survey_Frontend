import React, { useEffect, useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import { v4 as uuidv4 } from "uuid";
import { Axios } from "../../Axios";
import { authContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function FormBuilder() {
  const [form, setForm] = useState(null);
  const [formName, setFormName] = useState(null);
  const navigate = useNavigate();
  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);

  const handleCreateForm = () => {
    if (form) {
      const dataToSend = {
        uid: authUser.uid,
        formid: uuidv4(),
        formname: formName,
        formdata: form,
      };
      Axios.post("createform", dataToSend)
        .then((res) => {
          if (res.status == 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
