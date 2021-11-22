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
        <tr style={{textAlign:'center'}}>
          <th width="50">#</th>
          <th width="250">Material</th>
          <th width="180">Tipe</th>
          <th width="100">Stok</th>
          <th width="100">Action</th>
        </tr>
      </thead>
      <tbody>
        {stokMaterial.map((material) => {
          return (
            <tr key={material.id}>
              <td style={{textAlign:'center'}}>{material.id}</td>
              <td>{material.name}</td>
              <td>{material.types.name}</td>
              <td style={{textAlign:'center'}}>{material.stock}</td>
              <td className="d-flex justify-content-center">{props.children}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
