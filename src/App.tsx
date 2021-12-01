import "./styles.css";
import React, { useState } from "react";
import { IEmployeeItem } from "./EmployeeItem";
import EmployeeItem from "./EmployeeItem";
import UpdateStateSample from "./UpdateStateSample";
import UpdateStateSample2 from "./UpdateStateSample2";
import UpdateStateSample3 from "./UpdateStateSample3";

interface IApp {}

const App: React.FC<IApp> = () => {
  // set empty array
  // const employees: IEmployeeItem[] = [
  //   {
  //     firstName: "Ali",
  //     lastName: "Schick",
  //     role: "Developer"
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     role: "Manager"
  //   }
  // ];

  // This state variable will keep the value of inputs while we are typing
  const [singleEmployee, setSingleEmployee] = useState<IEmployeeItem>();

  // This state variable will keep the list items.
  // After we clicked submit, we will push the value of
  // singleEmployee state to this state and then we will
  // empty the singleEmployee one
  const [employees, setEmployees] = useState<IEmployeeItem[]>([]);

  return (
    <div className="App">
      <h1>Add rows in to the array</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="row">
        <label className="label">First name:</label>
        <input
          className="input"
          value={singleEmployee?.firstName}
          onChange={(event) => {
            setSingleEmployee({
              ...singleEmployee,
              firstName: event.target.value
            });
          }}
        />
      </div>
      <div className="row">
        <label className="label">Last name:</label>
        <input
          className="input"
          value={singleEmployee?.lastName}
          onChange={(event) => {
            setSingleEmployee({
              ...singleEmployee,
              lastName: event.target.value
            });
          }}
        />
      </div>
      <div className="row">
        <label className="label">Role:</label>
        <input
          className="input"
          value={singleEmployee?.role}
          onChange={(event) => {
            setSingleEmployee({
              ...singleEmployee,
              role: event.target.value
            });
          }}
        />
      </div>

      <button
        onClick={() => {
          //create a copy of object
          const _currentValues = employees.slice();
          _currentValues.push(singleEmployee);

          setEmployees(_currentValues);
          console.log(employees);
          setSingleEmployee({ firstName: "", lastName: "", role: "" });
        }}
      >
        Submit
      </button>

      <hr />

      {/* // Map data to show list on a screen */}
      {employees.map((employee) => {
        return <EmployeeItem {...employee} />;
      })}

      <UpdateStateSample />
      <UpdateStateSample2 />
      <UpdateStateSample3 />
    </div>
  );
};

export default App;
