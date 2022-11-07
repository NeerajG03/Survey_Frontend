import React, { useEffect, useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

export default function FormBuilder2() {
  const [form, setForm] = useState();

  useEffect(() => {
    console.log("hi");
    console.log(form);
  }, [form]);

  //MAKES A POST REQ TO SERVER, SO RUN A SERVER ON /API/FORMDATA, FOR SAVING AND RETRIEVING FORM

  return (
    <div>
      <ReactFormBuilder url="/api/formdata" saveUrl="/api/formdata" />
    </div>
  );
}
