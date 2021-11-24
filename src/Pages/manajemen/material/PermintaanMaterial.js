import { Container, Button, Table } from "react-bootstrap";
// import MaterialRequestTable from "../../../Data/MaterialRequestTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bars } from "@agney/react-loading";

const PermintaanMaterial = () => {
  const [matReqData, setMatReqData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [amount, setAmount] = useState([]);
  // const [stock, setStock] = useState([]);

  const handleKirim = (props) => {
    axios.get("/api/material/" + props.materialId).then((res) => {
      let pengurangan = res.data.stock - props.amount;
      axios
        .put("/api/material/" + props.materialId, { stock: pengurangan })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

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
    <div className="marginBody">
      <h1>Material</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Permintaan</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th width="50">#</th>
                  <th width="100">ID</th>
                  <th width="150">Produk</th>
                  <th width="150">Material</th>
                  <th width="80">Jumlah</th>
                  {/* <th width="120">Dari</th> */}
                  <th width="50">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  matReqData.map((reqMat, index) => {
                    return (
                      <tr key={reqMat.id} data={reqMat}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td style={{ textAlign: "center" }}>1221{reqMat.id}</td>
                        <td>{reqMat.products.name}</td>
                        <td>{reqMat.materials.name}</td>
                        <td style={{ textAlign: "center" }}>{reqMat.amount}</td>
                        {/* <td>{reqMat.users.name}</td> */}
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
                            <div
                              className="d-flex justify-content-center"
                              style={{ fontStyle: "italic", color: "#2479F9" }}
                            >
                              <text>Telah Dikirim</text>
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
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "570%", marginTop: "20px" }}
                    />
                  </div>
                )}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PermintaanMaterial;
