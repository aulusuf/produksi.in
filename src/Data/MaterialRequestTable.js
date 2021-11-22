import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

export default function MaterialRequestTable(props) {
  const [matReqData, setMatReqData] = useState([]);

  useEffect(() => {
    axios.get("/api/material_requests").then((res) => {
      setMatReqData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead style={{textAlign:'center'}}>
        <tr>
          <th width="50">#</th>
          <th width="150">Produk</th>
          <th width="150">Material</th>
          <th width="80">Jumlah</th>
          <th width="120">Dari</th>
          <th width="50">Status</th>
        </tr>
      </thead>
      <tbody>
        {matReqData.map((reqMat) => {
          return (
            <tr key={reqMat.id} data={reqMat}>
              <td style={{textAlign:'center'}}>{reqMat.id}</td>
              <td>{reqMat.products.name}</td>
              <td>{reqMat.materials.name}</td>
              <td style={{textAlign:'center'}}>{reqMat.amount}</td>
              <td>{reqMat.users.name}</td>
              {/* ditambahkan if else untuk status material request */}
              <td>
                {" "}
                <div className="d-flex justify-content-center">
                  <Button
                    as="input"
                    type="submit"
                    value="Kirim"
                    className="button-submit-prosuksi"
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
