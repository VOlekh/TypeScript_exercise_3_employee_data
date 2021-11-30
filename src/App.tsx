import "./styles.css";
import React from "react";
import { IEmployeeItem } from "./EmployeeItem";
import EmployeeItem from "./EmployeeItem";

interface IApp {}

const App: React.FC<IApp> = () => {
  // set empty array
  const employees: IEmployeeItem[] = [
    {
      firstName: "Ali",
      lastName: "Schick",
      role: "Developer"
    },
    {
      firstName: "John",
      lastName: "Doe",
      role: "Manager"
    }
  ];

  // use state for submit button

  return (
    <div className="App">
      <h1>Add rows in to the array</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* // show form with 3 empty lines and a button
    // use onChange */}
      <div></div>
      {/* // Map data to show list on a screen */}
      {employees.map((employee) => {
        return <EmployeeItem {...employee} />;
      })}
      <div></div>
    </div>
  );
};

export default App;
