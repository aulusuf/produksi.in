import React from "react";
// import { Button } from "react-bootstrap";

const CategoryTableData = (props) => {
  return (
    <tr>
      <td style={{textAlign:'center'}}>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.children}</td>
    </tr>
  );
};

export default CategoryTableData;
