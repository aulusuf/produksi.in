import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Form, Modal, Row, Table, Button } from "react-bootstrap";

const SelesaiProduksi = () => {
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [productAssignmentData, setproductAssignmentData] = useState([]);

  useEffect(() => {
    axios.get("/api/product_assignments").then((res) => {
      setproductAssignmentData(res.data);
      console.log(res.data);
      // const timProduksi = res.data.id
      // axios.get('/api/users')
    });
  }, []);
  return (
    <div className="marginBody">
      <Modal
        size=""
        show={LgShowUpdate}
        onHide={() => setLgShowUpdate(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col sm={3}>
              <div className="d-flex justify-content-center">
                <div>
                  <div>
                    {selectedImage && (
                      <div>
                        <div class="shadow-sm bg-body rounded">
                          <img
                            alt=""
                            width={"100px"}
                            height={"100px"}
                            src={URL.createObjectURL(selectedImage)}
                          />
                        </div>
                        <div className="d-flex justify-content-center"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="d-flex justify-content-end"
                style={{ marginTop: "20px" }}
              >
                <input
                  type="file"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </Col>
            <Col sm={9}>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Nama..." />
                  </Col>
                </Form.Group>
              </Row>
              <Col>
                <div className="d-flex mt-5 justify-content-center">
                  <Button
                    as="input"
                    type="submit"
                    value="Selesai"
                    className="button-submit-prosuksi"
                    style={{ paddingLeft: "20px", paddingRight: "20px" }}
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={LgShowDell}
        onHide={() => setLgShowDell(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Batalkan ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button
              as="input"
              type="submit"
              value="Batal"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              onClick={() => setLgShowDell(false)}
            />
          </div>
        </Modal.Body>
      </Modal>

      <h1>Produksi</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row>
            <Col>
              <h3>Dalam Proses</h3>
            </Col>
          </Row>
          <div style={{ marginTop: "2%" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produk</th>
                  <th>Jumlah</th>
                  <th>Biaya</th>
                  <th>Tim Produksi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productAssignmentData.map((paData) => {
                  return (
                    <tr key={paData.id}>
                      <td>{paData.id}</td>
                      <td>{paData.productId}</td>
                      <td>{paData.amount}</td>
                      <td>{paData.cost}</td>
                      <td>{paData.assignmentId}</td>
                      {/* // untuk if else status */}
                      <td>
                        <div className="d-flex justify-content-center">
                          <Button
                            as="input"
                            type="submit"
                            value="Ubah"
                            className="button-edit-produk"
                            onClick={() => setLgShowUpdate(true)}
                          />
                          <Button
                            as="input"
                            type="submit"
                            value="Batal"
                            className="button-cencel-prosuksi"
                            onClick={() => setLgShowDell(true)}
                          />
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

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Riwayat Prosuksi</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produk</th>
                  <th>Jumlah</th>
                  <th>Biaya</th>
                  <th>Tim Produksi</th>
                </tr>
              </thead>
              <tbody>
                {productAssignmentData.map((paData) => {
                  return (
                    <tr key={paData.id}>
                      <td>{paData.id}</td>
                      <td>{paData.productId}</td>
                      <td>{paData.amount}</td>
                      <td>{paData.cost}</td>
                      <td>{paData.assignmentId}</td>
                      {/* // untuk if else status */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SelesaiProduksi;
/* <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produk</th>
                  <th>Jumlah</th>
                  <th>Biaya</th>
                  <th>Tim Produksi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productAssignmentData.map((paData) => {
                  return (
                    <tr key={paData.id}>
                      <td>{paData.id  }</td>
                      <td>{paData.productId}</td>
                      <td>{paData.amount}</td>
                      <td>{paData.cost}</td>
                      <td>@{paData.assignmentId}</td>
                      // untuk if else status
                      <td>
                        <div className="d-flex justify-content-center">
                          <Button
                            as="input"
                            type="submit"
                            value="Ubah"
                            className="button-edit-produk"
                            onClick={() => setLgShowUpdate(true)}
                          />
                          <Button
                            as="input"
                            type="submit"
                            value="Batal"
                            className="button-cencel-prosuksi"
                            onClick={() => setLgShowDell(true)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </Table> */
/* <div className="d-flex justify-content-center">
                      <Button
                        variant="primary"
                        size="lg"
                        disabled
                        className="button-proses-prosuksi"
                      >
                        Dalam Proses
                      </Button>
                    </div>
                    */
