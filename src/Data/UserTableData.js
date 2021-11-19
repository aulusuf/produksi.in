import React from "react";
// import { Button } from "react-bootstrap";

const UserTableData = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roles.name}</td>
      <td>{props.data.username}</td>
      <td>{props.children}</td>
    </tr>
  );
};

export default UserTableData;
