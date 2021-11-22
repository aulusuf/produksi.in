import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import axios from "axios";

export default function MaterialRequestTable(props) {
  const [matReqData, setMatReqData] = useState([]);

  const handleKirim = (props) => {
    console.log(props);
    axios
      .put("/api/material_request/" + props.id, { statusId: 2 })
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios.get("/api/material_requests").then((res) => {
      setMatReqData(res.data);
    });
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Produk</th>
          <th>Material</th>
          <th>Jumlah</th>
          <th>Dari</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {matReqData.map((reqMat) => {
          return (
            <tr key={reqMat.id} data={reqMat}>
              <td>{reqMat.id}</td>
              <td>{reqMat.products.name}</td>
              <td>{reqMat.materials.name}</td>
              <td>{reqMat.amount}</td>
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
        })}
      </tbody>
    </Table>
  );
}
