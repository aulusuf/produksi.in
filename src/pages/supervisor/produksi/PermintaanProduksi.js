import React, { useEffect, useState } from "react";
import { Container, Modal, Table, Button } from "react-bootstrap";
import "../styles/produksi.css";
import { Bars } from "@agney/react-loading";
import axios from "axios";

const BuatPermintaan = () => {
  const [lgShowDone, setlgShowDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productAssignmentData, setproductAssignmentData] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);

  const [lgShow, setLgShow] = useState(false);
  const [assignmentPending, setAssignmentPending] = useState([]);
  const [assignmentOngoing, setAssignmentOngoing] = useState([]);
  const [assignmentId, setAssignmentId] = useState([]);

  const terimaPermintaan = (props) => {
    console.log(props);
    setAssignmentId(props.id);
    // axios
    //   .put("/api/product_assignment/" + props.id, { statusId: 2 })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  };

  const modalSelesaikan = (props) => {
    console.log(props);
    setlgShowDone(true);
    setAssignmentId(props.id);
  };

  const selesai = () => {
    console.log(assignmentId);
    axios
      .put("/api/product_assignment/" + assignmentId, { statusId: 4 })
      .then((res) => {
        console.log(res.data);
        setlgShowDone(false);
      });
  };

  useEffect(() => {
    // axios.get("/api/product_assignments").then((res) => {
    //   setproductAssignmentData(res.data);
    //   setLoading(true);
    // });
    axios.get("/api/product_assignment/status/1").then((res) => {
      setAssignmentPending(res.data);
      setLoading(true);
    });
    axios.get("/api/product_assignment/status/3").then((res) => {
      setAssignmentOngoing(res.data);
      setLoading(true);
    });
    axios.get("/api/product_assignments").then((res) => {
      setAssignmentData(res.data);
      setLoading(true);
    });
  });

  return (
    <div className="marginBody">
      <Modal
        size="sm"
        show={lgShowDone}
        onHide={() => setlgShowDone(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="modal-detail-produk"
            className="d-flex justify-content-center"
          >
            <strong style={{ fontSize: "20px" }}>Perhatian</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            Yakin ingin menyelesaikannya?
          </div>
          <div className="d-flex mt-2 mb-2 justify-content-center">
            <Button
              variant="primary"
              className="button-selesai-material"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
              onClick={() => selesai()}
            >
              Selesaikan
            </Button>
            <Button
              as="input"
              type="submit"
              value="Batalkan"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
              onClick={() => setlgShowDone(false)}
            />
          </div>
        </Modal.Body>
      </Modal>
      <h1>Produksi</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Permintaan</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th width="50">#</th>
                  <th width="300">Produk</th>
                  <th width="120">Jumlah</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  assignmentPending.map((pendingData, index) => {
                    return (
                      <tr key={pendingData.id} data={pendingData}>
                        <td>{index + 1}</td>
                        <td>
                          {pendingData.productId
                            ? pendingData.products.name
                            : null}
                        </td>
                        <td>{pendingData.amount}</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              as="input"
                              type="submit"
                              value="Terima"
                              className="button-submit-prosuksi"
                              onClick={() => terimaPermintaan(pendingData)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "535%", marginTop: "20px" }}
                    />
                  </div>
                )}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Dalam Proses Pengerjaan</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th width="50">#</th>
                  <th width="300">Produk</th>
                  <th width="120">Jumlah</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  assignmentOngoing.map((ongoingData, index) => {
                    return (
                      <tr key={ongoingData.id} data={ongoingData}>
                        <td>{index + 1}</td>
                        <td>
                          {ongoingData.productId
                            ? ongoingData.products.name
                            : null}
                        </td>
                        <td>{ongoingData.amount}</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              as="input"
                              type="submit"
                              value="Selesaikan"
                              variant="success"
                              onClick={() => modalSelesaikan(ongoingData)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "535%", marginTop: "20px" }}
                    />
                  </div>
                )}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Riwayat</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th width="50">#</th>
                  <th width="250">Produk</th>
                  <th width="120">Jumlah</th>
                  <th width="120">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  assignmentData.map((assignmentDone, index) => {
                    return (
                      <tr key={assignmentDone.id}>
                        <td>{index + 1}</td>
                        <td style={{ textAlign: "start" }}>
                          {assignmentDone.products.name}
                        </td>
                        <td>{assignmentDone.amount}</td>
                        <td style={{ fontStyle: "italic", color: "#2479F9" }}>
                          {assignmentDone.statusId
                            ? assignmentDone.status.name
                            : null}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "510%", marginTop: "20px" }}
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

export default BuatPermintaan;
