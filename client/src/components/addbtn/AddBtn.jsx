import React from "react";
import "./addbtn.css"

const AddBtn = ({btnClick}) => {
  return (
    <div className="AddContainer">
      <button onClick={btnClick} className="addbtn"> + Add cat </button>
    </div>
  );
};

export default AddBtn;
