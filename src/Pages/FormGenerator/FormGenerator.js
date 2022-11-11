import React, { useEffect, useState } from "react";
import { ReactFormGenerator } from "react-form-builder2";
import { Axios } from "../../Axios";
import { authContext } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";

export default function FormGenerator() {
  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);
  const [formData, setFormData] = useState();
  const [ansData, setAnsData] = useState();
  const location = useLocation();

  const [temp, setTemp] = useState(false);

  useEffect(() => {
    Axios.get(`/getform/${location.state.formid}`).then((res) => {
      setFormData(res.data.formdata);
    });
  }, [location.state.formid]);

  return (
    <div>
      {!temp && formData && (
        <ReactFormGenerator
          data={formData}
          onSubmit={(e) => {
            e.forEach((val) => {
              console.log(val);
            });
            setAnsData(e);
            setTemp(true);
          }}
          onChange={(e) => {}}
          form_action="/"
          form_method="POST"
        />
      )}
      {temp && (
        <ReactFormGenerator
          download_path=""
          back_action="/"
          back_name="Back"
          answer_data={ansData}
          action_name="Save"
          form_action="/"
          form_method="POST"
          read_only={true}
          hide_actions={true}
          data={formData}
        />
      )}
    </div>
  );
}
