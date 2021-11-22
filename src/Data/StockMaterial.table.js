import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import {Bars} from '@agney/react-loading';

export default function StockMaterialTable(props) {
  const [stokMaterial, setStokMaterial] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/materials")
      .then((res) => {
        setStokMaterial(res.data);
        setLoading(true); 
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
        {loading ? stokMaterial.map((material, index) => {
          return (
            <tr key={material.id}>
              <td style={{textAlign:'center'}}>{index + 1}</td>
              <td>{material.name}</td>
              <td>{material.types.name}</td>
              <td style={{textAlign:'center'}}>{material.stock}</td>
              <td className="d-flex justify-content-center">{props.children}</td>
            </tr>
          );
        }):
        <div>
          <Bars width="50" color="#2f89e4" style={{marginLeft:'635%', marginTop:'20px'}}/>
        </div>
        }
      </tbody>
    </Table>
  );
}
