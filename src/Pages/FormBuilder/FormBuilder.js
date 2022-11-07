import { useState } from "react";

export default function FormBuilder() {
  const [formElementList, setFormElementList] = useState([]);
  const [numOfElements, setNumOfElements] = useState(0);

  const handleAddTextField = () => {
    setNumOfElements((prev) => prev + 1);
    const newTextElement = (
      <div key={numOfElements.length + 1}>
        <input type="text" placeholder="Text Field Name"></input>
      </div>
    );
    setFormElementList((prev) => [...prev, newTextElement]);
  };

  const handleRadioButtonField = () => {
    setNumOfElements((prev) => prev + 1);
    const newTextElement = (
      <div key={numOfElements.length + 1}>
        <input type="text" placeholder="Text Field Name"></input>
        <input type="text" placeholder="Option Value"></input>
      </div>
    );
    setFormElementList((prev) => [...prev, newTextElement]);
  };

  return (
    <div>
      {formElementList}
      <div>
        <button onClick={handleAddTextField}>Add Text Field</button>
        <button onClick={handleRadioButtonField}>Add RadioButton Field</button>
        <button onClick={handleAddTextField}>Add Checkbox Field</button>
      </div>
    </div>
  );
}
