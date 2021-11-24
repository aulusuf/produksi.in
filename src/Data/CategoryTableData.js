import React from "react";
// import { Button } from "react-bootstrap";

const CategoryTableData = (props) => {
  return (
    <tr>
      <td style={{textAlign:'center'}}>{props.i + 1}</td>
      <td style={{textAlign:'center'}}>0421{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.children}</td>
    </tr>
  );
};

export default CategoryTableData;
