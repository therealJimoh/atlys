import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./entry.css";
import AddBtn from "../addbtn/AddBtn";

const Entry = () => {
  const [active, setActive] = useState(false);

  const addCat = () => {
    setActive(true);
    console.log("I am clciked")
  };

  const cancelAddCat = () => {
    setActive(false);
  };

  return (
    <>
      {active ? (
        <div className="Container">
          <Formik>
            <Form>
              <div className="FormWrapper">
                <div className="InputContainer">
                  <div className="InputWrapper InputDiv">
                    <label> Name</label>
                    <Field className="test" type="text" name="name" />
                  </div>
                  <div className="InputWrapper InputDiv">
                    <label> Color</label>
                    <Field className="test" type="text" name="name" />
                  </div>
                </div>
                <div className="InputWrapper">
                  <label> Time Zone</label>
                  <Field as="select">
                    <option value="">Pacific</option>
                  </Field>
                </div>
                <div className="ActionButtons">
                  <button onClick={cancelAddCat} className="ActBtn cancel">
                    {" "}
                    Cancel
                  </button>
                  <button className="ActBtn save"> Save</button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      ) : (
        <AddBtn btnClick={addCat} />
      )}
    </>
  );
};

export default Entry;
