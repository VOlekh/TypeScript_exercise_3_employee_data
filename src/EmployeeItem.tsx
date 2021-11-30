import React from "react";

export interface IEmployeeItem {
  firstName: string;
  lastName: string;
  role: string;
}

const EmployeeItem: React.FC<IEmployeeItem> = (props) => {
  //define props
  const { firstName, lastName, role } = props;
  return (
    <div>
      <div>{`First Name: ${firstName}`}</div>
      <br />
      <div>{`Last Name: ${lastName} `}</div>
      <br />
      <div>{`Role: ${role}`}</div>
      <br />
    </div>
  );
};
export default EmployeeItem;
