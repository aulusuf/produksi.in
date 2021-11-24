import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
  Button,
} from "react-bootstrap";
import { Bars } from "@agney/react-loading";

const SelesaiProduksi = () => {
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [assignmentPending, setAssignmentPending] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [assignmentId, setAssignmentId] = useState();

  const modalBatal = (props) => {
    setAssignmentId(props.id);
    console.log(props);
    setLgShowDell(true);
  };

  const batal = () => {
    console.log(assignmentId);
    axios.delete("/api/product_assignment/" + assignmentId).then((res) => {
      console.log(res);
      setLgShowDell(false);
    });
  };

  useEffect(() => {
    axios.get("/api/product_assignment/status/1").then((res) => {
      setAssignmentPending(res.data);
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
            {/* <Col sm={3}>
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
            </Col> */}
            <Col>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Jumlah
                  </Form.Label>
                  <Col>
                    <Form.Control type="number" placeholder="Jumlah..." />
                  </Col>
                </Form.Group>
              </Row>
              <Col>
                <div className="d-flex mt-2 justify-content-center">
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
          <p>Yakin ingin membatalkan produksi?</p>
          <div className="d-flex mt-2 justify-content-end">
            <Button
              as="input"
              type="submit"
              value="Batal"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              onClick={() => batal()}
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
            <div style={{ marginTop: "5%" }}>
              <Table striped bordered hover style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th width="40">#</th>
                    <th width="250">Produk</th>
                    <th width="80">ID</th>
                    <th width="100">Jumlah</th>
                    <th width="120">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? assignmentPending.map((paData, index) => {
                      return (
                        <tr key={paData.id} data={paData}>
                          <td>{index + 1}</td>
                          <td style={{ textAlign: "start" }}>
                            {paData.products.name}
                          </td>
                          <td>{paData.id}</td>
                          <td>{paData.amount}</td>
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
                                onClick={() => modalBatal(paData)}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }):
                    <div>
                      <Bars
                        width="50"
                        color="#2f89e4"
                        style={{ marginLeft: "580%", marginTop: "20px" }}
                      />
                    </div>
                  }
                </tbody>
              </Table>
            </div>
          {/* <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover style={{textAlign:'center'}}>
              <thead>
                <tr>
                  <th width="40">#</th>
                  <th width="250">Produk</th>
                  <th width="80">ID</th>
                  <th width="100">Jumlah</th>
                  <th width="120">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? ( assignmentPending.map((paData, index) => {
                  return (
                    <tr key={paData.id} data={paData}>
                      <td>{index + 1}</td>
                      <td style={{ textAlign: "start" }}>
                        {paData.products.name}
                      </td>
                      <td>{paData.id}</td>
                      <td>{paData.amount}</td>
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
                            onClick={() => modalBatal(paData)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
                ):(
                <div>
                  <Bars width="50" color="#2f89e4" style={{marginLeft:'580%', marginTop:'20px'}}/>
                </div>
                )}
              </tbody>
            </Table>
          </div> */}
        </Container>
      </div>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Riwayat Produksi</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th width="40">#</th>
                  <th width="250">Produk</th>
                  <th width="80">ID</th>
                  <th width="100">Jumlah</th>
                  <th width="120">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? assignmentData.map((assignmentDone, index) => {
                    return (
                      <tr key={assignmentDone.id}>
                        <td>{index + 1}</td>
                        <td style={{ textAlign: "start" }}>
                          {assignmentDone.products.name}
                        </td>
                        <td>{assignmentDone.id}</td>
                        <td>{assignmentDone.amount}</td>
                        <td>
                          {assignmentDone.statusId === 1 ? (
                            <text style={{fontStyle:'italic', color:'#e72300'}}>{assignmentDone.status.name}</text>
                          ) : assignmentDone.statusId === 2 ? (
                            <text style={{fontStyle:'italic', color:'#f99d24'}}>{assignmentDone.status.name}</text>
                          ) : assignmentDone.statusId === 3 ? (
                            <text style={{fontStyle:'italic', color:'#2479F9'}}>{assignmentDone.status.name}</text>
                          ) : assignmentDone.statusId === 4 ? (
                            <text style={{fontStyle:'italic', color:'#00b62d'}}>{assignmentDone.status.name}</text>
                          ) : null}
                        </td>
                      </tr>
                    );
                  }):
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "580%", marginTop: "20px" }}
                    />
                  </div>
                }
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
