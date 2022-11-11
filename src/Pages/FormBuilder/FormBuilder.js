import React, { useEffect, useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import { v4 as uuidv4 } from "uuid";
import { Axios } from "../../Axios";
import { authContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function FormBuilder() {
  const [form, setForm] = useState(null);
  const [formName, setFormName] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);
  let formID = "";

  const handleCodeClose = () => {
    setOpen(false);
  };

  const sendReq = () => {
    if (form) {
      const dataToSend = {
        uid: authUser.uid,
        formid: formID,
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

  const handleCreateForm = () => {
    formID = uuidv4().toString();
    setOpen(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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

      <Modal
        open={open}
        onClose={handleCodeClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Form Code : {formID}{" "}
            <button
              onClick={() => {
                navigator.clipboard.writeText(formID);
                alert("Copied!");
              }}
            >
              Copy
            </button>
            <br />
            <button onClick={sendReq}>Okay!</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
