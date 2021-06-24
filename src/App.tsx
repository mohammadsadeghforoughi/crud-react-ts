import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyInput from "./components/input";
import {IFormValues} from './types'
 

function App() {
  const [FormValue, setFormValue] = React.useState<IFormValues>();
  useEffect(() => {
    console.log(FormValue);
  }, [FormValue]);

  return (
    <>
      <MyInput
        FormValue={FormValue}
        setFormValue={setFormValue}
        name={"firstName"}
        label={"First Name"}
      />
      <MyInput
        FormValue={FormValue}
        setFormValue={setFormValue}
        name={"lastName"}
        label={"Last Name"}
        helpText={"we never share your name to others"}
      />
    </>
  );
}

export default App;
