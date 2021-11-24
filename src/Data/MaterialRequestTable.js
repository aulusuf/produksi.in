import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import {Bars} from '@agney/react-loading';

export default function MaterialRequestTable(props) {
  const [matReqData, setMatReqData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleKirim = (props) => {
    axios
      .put("/api/material_request/" + props.id, { statusId: 2 })
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios.get("/api/material_requests").then((res) => {
      setMatReqData(res.data);
      setLoading(true); 
    });
  });

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
        {loading ? matReqData.map((reqMat, index) => {
          return (
            <tr key={reqMat.id} data={reqMat}>
              <td style={{textAlign:'center'}}>{index + 1}</td>
              <td>{reqMat.products.name}</td>
              <td>{reqMat.materials.name}</td>
              <td style={{textAlign:'center'}}>{reqMat.amount}</td>
              <td>{reqMat.users.name}</td>
              {/* ditambahkan if else untuk status material request */}
              <td>
                {reqMat.statusId === 1 ? (
                  <div className="d-flex justify-content-center">
                    <Button
                      as="input"
                      type="submit"
                      value="Kirim"
                      className="button-submit-prosuksi"
                      onClick={() => handleKirim(reqMat)}
                    />
                  </div>
                ) : reqMat.statusId === 2 ? (
                  <div className="d-flex justify-content-center">
                    <Button
                      as="input"
                      type="submit"
                      value="Telah Dikirim"
                      className="button-submit-prosuksi"
                    />
                  </div>
                ) : (
                  <div className="d-flex justify-content-center">
                    <Button
                      as="input"
                      type="submit"
                      value="Selesai"
                      className="button-submit-prosuksi"
                    />
                  </div>
                )}
              </td>
            </tr>
          );
        }):
        <div>
          <Bars width="50" color="#2f89e4" style={{marginLeft:'600%', marginTop:'20px'}}/>
        </div>
        }
      </tbody>
    </Table>
  );
}
