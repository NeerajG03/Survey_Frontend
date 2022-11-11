import React, { useEffect, useState } from "react";
import { ReactFormGenerator } from "react-form-builder2";
import { Axios } from "../../Axios";
import { authContext } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";

export default function FormGenerator() {
  const { authUser, setAuthUser, getAuthUser } = React.useContext(authContext);
  const [formData, setFormData] = useState();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.formid);
    console.log("hello");
    Axios.get(`/getform/${location.state.formid}`).then((res) => {
      console.log(res.data);
      setFormData(res.data.formdata);
    });
  }, [location.state.formid]);

  return <div>{formData && <ReactFormGenerator data={formData} />}</div>;
}
