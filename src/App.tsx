import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyInput from "./components/input";
import { IFormValues } from "./types";
import DataTable from "./components/dataTable";

interface IStorage extends IFormValues {}

function App() {
  const [FormValue, setFormValue] = React.useState<IFormValues>();

  const [Storage, setStorage] = React.useState<IStorage[]>([]);

  const addData = (fName: string, lName: string, address: string) => {
    setStorage([
      ...Storage,
      { firstName: fName, lastName: lName, address: address },
    ]);
  };

  const handleClick = () => {
    addData(FormValue!.firstName, FormValue!.lastName, FormValue!.address);
    setFormValue(undefined);
  };

  useEffect(() => {
    console.log(Storage);
  }, [Storage]);

  return (
    <>
      <div className={"w-50  mx-auto bg-warning rounded p-2 m-2"}>
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
        />
        <MyInput
          FormValue={FormValue}
          setFormValue={setFormValue}
          name={"address"}
          label={"Address"}
        />

        <button
          onClick={handleClick}
          type="button"
          className="btn btn-success w-100"
        >
          Add
        </button>
      </div>

      <div className={"w-75 m-auto"}>
        <DataTable data={Storage} />
      </div>
    </>
  );
}

export default App;

const optData = [
  {
    firstName: "mohammad",
    lastName: "foroughi",
    address: "tehran",
  },
  {
    firstName: "Harmik",
    lastName: "Boazar",
    address: "karaj",
  },
];
