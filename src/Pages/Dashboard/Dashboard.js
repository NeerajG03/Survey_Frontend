import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { authContext } from "../../Context/AuthContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Axios } from "../../Axios";

function Dashboard() {
  const navigate = useNavigate();

  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);
  const [open, setOpen] = useState(false);
  const [ansCode, setAnsCode] = useState("");

  useEffect(() => {
    getAuthUser();
  }, []);

  const handleAnswerFormModal = () => {
    setOpen(true);
  };
  const handleAnswerFormClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setAuthUser(null);
    navigate("/");
  };

  const handleCreateForm = () => {
    navigate("/formbuilder");
  };

  const handleAnswerForm = () => {
    navigate("/answerform", { state: { formid: ansCode } });
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
    <div className="dashboard">
      {authUser && (
        <div>
          <div className="dashboard__container">
            
            <div>
              <div className="header">{`${authUser.name}'s forms:`}</div>
              <div className="loggedas">
                Logged in as <b>{authUser.name}</b>
              </div>
              <div className="forms">
              {authUser.forms.map((form) => {
                return (
                  <div key={form.formid}>
                    <li>
                      {form.formname + "  " + form.formid}
                      <button
                        className="button-55"
                        onClick={() => alert("bruh im adding this later")}
                      >
                        See Results{" "}
                      </button>{" "}
                    </li>
                  </div>
                );
              })}
            </div>  
            </div>
            <div className="buttonset1">
              <button className="button-74" onClick={handleCreateForm}>
                Create a form
              </button>
              <br />
              <button
                className="button-74"
                onClick={handleAnswerFormModal}
              >
                Answer a form
              </button>
            </div>
            <button className="button-56" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <Modal
            open={open}
            onClose={handleAnswerFormClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Answer Code
              </Typography>
              <input onChange={(e) => setAnsCode(e.target.value)}></input>
              <br />
              <button className="dashboard__btn" onClick={handleAnswerForm}>
                Answer!
              </button>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
