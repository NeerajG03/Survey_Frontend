import { ReactFormGenerator } from "react-form-builder2";

export default function FormGenerator(props) {
  return (
    <div>
      <ReactFormGenerator data={props.data} />
    </div>
  );
}
