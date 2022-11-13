import React, { useEffect, useState } from "react";
import { ReactFormGenerator } from "react-form-builder2";
import { Axios } from "../../Axios";
import { authContext } from "../../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function FormGenerator() {
  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);
  const [formToShow, setFormToShowData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`/getform/${location.state.formid}`).then((res) => {
      setFormToShowData(res.data);
    });
  }, [location.state.formid]);

  const submitForm = (e) => {
    const dataToSend = {
      uid: formToShow.uid,
      formid: location.state.formid,
      answerdata: {
        ansuid: authUser.uid,
        data: e,
      },
    };

    Axios.post(`/answerform`, dataToSend)
      .then((res) => {
        if (res.status == 200) {
          alert("Form Submitted!");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {formToShow && (
        <ReactFormGenerator
          data={formToShow.formdata}
          onSubmit={(e) => {
            submitForm(e);
          }}
          onChange={(e) => {}}
          form_action="/"
          form_method="POST"
        />
      )}
    </div>
  );
}
