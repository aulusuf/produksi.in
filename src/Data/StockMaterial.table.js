import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function StockMaterialTable(props) {
  const [stokMaterial, setStokMaterial] = useState([]);

  useEffect(() => {
    axios
      .get("/api/materials")
      .then((res) => {
        setStokMaterial(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(userData);
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Material</th>
          <th>Tipe</th>
          <th>Stok</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stokMaterial.map((material) => {
          return (
            <tr key={material.id}>
              <td>{material.id}</td>
              <td>{material.name}</td>
              <td>{material.types.name}</td>
              <td>{material.stock}</td>
              <td>{props.children}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
