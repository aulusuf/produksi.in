import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function TypeTable(props) {
  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
    axios.get("/api/types").then((res) => {
      setTypeData(res.data);
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Tipe</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {typeData.map((type) => {
          return (
            <tr key={type.id} data={type}>
              <td>{type.id}</td>
              <td>{type.name}</td>
              <td>{props.children}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
