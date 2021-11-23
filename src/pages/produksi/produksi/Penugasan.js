import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col, Modal, Button } from "react-bootstrap";
import "../styles/produksi.css";
// import { MDBDataTable } from "mdbreact";

const Penugasan = () => {
  const [lgShowDone, setlgShowDone] = useState(false);
  const [lgShowAccept, setlgShowAccept] = useState(false);

  const [assignmentId, setAssignmentId] = useState();
  const [newAssignment, setNewAssignment] = useState([]);
  const [assignmentHistory, setAssignmentHistory] = useState([]);

  const modalSelesaikan = (props) => {
    setlgShowDone(true);
    console.log(props);
    setAssignmentId(props.id);
  };

  const selesaikan = () => {
    console.log(assignmentId);
    axios
      .put("/api/product_assignment/" + assignmentId, { statusId: 3 })
      .then((res) => {
        console.log(res.data);
        setlgShowDone(false);
      });
  };

  useEffect(() => {
    axios.get("/api/product_assignment/status/2").then((res) => {
      setNewAssignment(res.data);
    });
    axios.get("/api/product_assignment/status/3").then((res) => {
      setAssignmentHistory(res.data);
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
              onClick={() => selesaikan()}
            >
              Selesaikan
            </Button>
            <Button
              as="input"
              type="submit"
              value="Batal"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
              onClick={() => setlgShowDone(false)}
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={lgShowAccept}
        onHide={() => setlgShowAccept(false)}
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
            Yakin ingin mengambil orderan ini?
          </div>
          <div className="d-flex mt-2 mb-2 justify-content-center">
            <Button
              variant="primary"
              className="button-selesai-material"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
              onClick={() => setlgShowDone(false)}
            >
              Terima
            </Button>
            <Button
              as="input"
              type="submit"
              value="Batal"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
              onClick={() => setlgShowDone(false)}
            />
          </div>
        </Modal.Body>
      </Modal>

      <h1>Produksi</h1>
      <Row className="my-4">
        <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <h3>Penugasan</h3>
            <div style={{ marginTop: "5%" }}>
              <Table striped bordered hover>
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th width="50">#</th>
                    <th width="350">Produk</th>
                    <th width="100">Jumlah</th>
                    <th width="80">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {newAssignment.map((assignment) => {
                    return (
                      <tr>
                        <td style={{ textAlign: "center" }}>{assignment.id}</td>
                        <td>
                          {assignment.productId
                            ? assignment.products.name
                            : null}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {assignment.amount}
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              variant="primary"
                              className="button-selesai-material"
                              style={{ cursor: "pointer" }}
                              onClick={() => modalSelesaikan(assignment)}
                            >
                              Selesaikan
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </Row>
      {/* <Row className="my-4">
        <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <h3>Pengerjaan</h3>
            <div style={{ marginTop: "5%" }}>
              <Table striped bordered hover>
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th width="50">#</th>
                    <th width="350">Produk</th>
                    <th width="100">Jumlah</th>
                    <th width="80">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {newAssignment.map((assignment) => {
                    return (
                      <tr>
                        <td style={{ textAlign: "center" }}>{assignment.id}</td>
                        <td>Tas Punggung</td>
                        <td style={{ textAlign: "center" }}>200</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              as="input"
                              type="submit"
                              value="Terima"
                              className="button-submit-prosuksi"
                              onClick={() => setlgShowDone(true)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td style={{ textAlign: "center" }}>2</td>
                    <td>Jaket</td>
                    <td style={{ textAlign: "center" }}>50</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          className="button-selesai-material"
                          style={{ cursor: "pointer" }}
                          onClick={() => setlgShowDone(true)}
                        >
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>3</td>
                    <td>Sepatu</td>
                    <td style={{ textAlign: "center" }}>150</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          className="button-selesai-material"
                          style={{ cursor: "pointer" }}
                          onClick={() => setlgShowDone(true)}
                        >
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>4</td>
                    <td>Kemeja</td>
                    <td style={{ textAlign: "center" }}>45</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          className="button-selesai-material"
                          style={{ cursor: "pointer" }}
                          onClick={() => setlgShowDone(true)}
                        >
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </Row> */}
      <Row className="my-4">
        <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <h3>Riwayat Penugasan</h3>
            <div style={{ marginTop: "5%" }}>
              <Table striped bordered hover>
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th width="50">#</th>
                    <th width="350">Produk</th>
                    <th width="100">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {assignmentHistory.map((history) => {
                    return (
                      <tr key={history.id} data={history}>
                        <td style={{ textAlign: "center" }}>{history.id}</td>
                        <td>
                          {history.productId ? history.products.name : null}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {history.amount}
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td style={{ textAlign: "center" }}>2</td>
                    <td>Jaket</td>
                    <td style={{ textAlign: "center" }}>50</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>3</td>
                    <td>Sepatu</td>
                    <td style={{ textAlign: "center" }}>150</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>4</td>
                    <td>Kemeja</td>
                    <td style={{ textAlign: "center" }}>45</td>
                  </tr> */}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
        {/* <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <div style={{ marginTop: "2%" }}>
              <MDBDataTable scrollX striped bordered data={data} />
            </div>
          </Container>
        </div> */}
      </Row>
    </div>
  );
};
export default Penugasan;
