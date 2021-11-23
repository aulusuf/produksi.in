// import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Table,
  Button,
} from "react-bootstrap";

const PermintaanMaterial = () => {
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    axios.get("/api/material_requests").then((res) => {
      setRequestList(res.data);
    });
  });
  return (
    <div className="marginBody">
      <Modal
        size="lg"
        show={LgShowUpdate}
        onHide={() => setLgShowUpdate(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Permintaan Material
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Pilih Produk
              </div>
              <Form.Select
                defaultValue="Pilih Produk..."
                style={{ cursor: "pointer" }}
              >
                <option selected>Pilih Produk</option>
                <option>Tas</option>
                <option>Sepatu</option>
                <option>Baju</option>
              </Form.Select>
            </Col>
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Pilih Material
              </div>
              <Form.Select
                defaultValue="Pilih Produk..."
                style={{ cursor: "pointer" }}
              >
                <option selected>Pilih Material</option>
                <option>Tas</option>
                <option>Sepatu</option>
                <option>Baju</option>
              </Form.Select>
            </Col>
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Jumlah Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah..."
              />
            </Col>
          </Row>

          {/* <Row>
            <Col sm="3">
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded"></div>
              </div>
              <div
                className="d-flex mt-1 justify-content-center"
                style={{ fontStyle: "italic" }}
              >
                Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah..."
              />
            </Col>
            <Col sm="3">
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image
                    style={{ height: "120px", width: "120px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                    rounded
                  />
                </div>
              </div>
              <div
                className="d-flex mt-1 justify-content-center"
                style={{ fontStyle: "italic" }}
              >
                Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah..."
              />
            </Col>
            <Col sm="3">
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image
                    style={{ height: "120px", width: "120px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                    rounded
                  />
                </div>
              </div>
              <div
                className="d-flex mt-1 justify-content-center"
                style={{ fontStyle: "italic" }}
              >
                Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah..."
              />
            </Col>
            <Col sm="3">
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image
                    style={{ height: "120px", width: "120px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                    rounded
                  />
                </div>
              </div>
              <div
                className="d-flex mt-1 justify-content-center"
                style={{ fontStyle: "italic" }}
              >
                Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah..."
              />
            </Col>
          </Row> */}
          <Col>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                as="input"
                type="submit"
                value="Buat Permintaan"
                className="button-submit-prosuksi"
              />
              <Button
                as="input"
                type="submit"
                value="Batal"
                className="button-cencel-prosuksi"
                onClick={() => setSelectedImage(null)}
              />
            </div>
          </Col>
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
              <h3>Permintaan Material</h3>
            </Col>
            <Col>
              <div
                className="d-flex justify-content-end"
                style={{ marginRight: "7%" }}
              >
                <Button
                  as="input"
                  type="submit"
                  value="Buat Permintaan"
                  className="button-submit-prosuksi"
                  onClick={() => setLgShowUpdate(true)}
                />
              </div>
            </Col>
          </Row>
          <div style={{ marginTop: "2%" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produk</th>
                  <th>Material</th>
                  <th>Action</th>
                  <th>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {requestList.map((request) => {
                  return (
                    <tr key={request.id} data={request}>
                      <td>{request.id}</td>
                      <td>{request.products.name}</td>
                      <td>{request.materials.name}</td>
                      <td>{request.amount}</td>
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
          <h3>Riwayat Permintaan Material</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produk</th>
                  <th>Material</th>
                  <th>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {requestList.map((request) => {
                  return (
                    <tr key={request.id} data={request}>
                      <td>{request.id}</td>
                      <td>{request.products.name}</td>
                      <td>{request.materials.name}</td>
                      <td>{request.amount}</td>
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

export default PermintaanMaterial;
