import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Axios } from "../../Axios";
import { ReactFormGenerator } from "react-form-builder2";
import "./Results.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formAnsList, setFormAnsList] = useState();
  const [ansModalOpen, setAnsModalOpen] = useState(false);
  const [formToShow, setFormToShowData] = useState();
  const [ansDataToShow, setAnsDataToShow] = useState();

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
    height: '90%',
    overflow: 'auto'
  };

  useEffect(() => {
    Axios.get(`/getform/${location.state.formid}`).then((res) => {
      setFormToShowData(res.data);
    });

    Axios.get(`/answerlist/${location.state.formid}`).then((res) => {
      setFormAnsList(res.data.answerdata);
    });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="header">
              <TableCell className="pval">UID of Surveyee </TableCell>
              <TableCell className="pval2" align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formAnsList &&
              formAnsList.map((formAns) => (
                <TableRow
                  key={formAns.ansuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="uid" component="th" scope="row">
                    {formAns.ansuid}
                  </TableCell>
                  <TableCell className="action" align="right">
                    <button
                    className="button-56"
                      onClick={() => {
                        setAnsModalOpen(true);
                        setAnsDataToShow(JSON.parse(formAns.data));
                      }}
                    >
                      View Answer
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* {formAnsList &&
        formAnsList.map((formAns) => {
          return (
            <div key={formAns.ansuid}>
              <p>{formAns.ansuid}</p>
              <button
                onClick={() => {
                  setAnsModalOpen(true);
                  setAnsDataToShow(JSON.parse(formAns.data));
                }}
              >
                View Answer
              </button>
            </div>
          );
        })} */}

      <Modal
        open={ansModalOpen}
        onClose={() => {
          setAnsModalOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="answerModal">
          {ansDataToShow && formToShow && (
            <ReactFormGenerator
              data={formToShow.formdata}
              answer_data={ansDataToShow}
              read_only={true}
              submitButton={
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAnsModalOpen(false);
                  }}
                >
                  Close
                </button>
              }
            />
          )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
