import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Form, Image, Modal, Row, Button } from "react-bootstrap";
import LoadingData from "../../../Components/LoadingProduct";

const DataMaterial = () => {
  const [lgShow, setLgShow] = useState(false);
  const [lgShowDetail, setLgShowDetail] = useState(false);
  const [lgShowEdit, setLgShowEdit] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [materialData, setMaterialData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/materials")
      .then((res) => {
        setMaterialData(res.data);
        setLoading(true); 
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div
      className="marginBody"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <Modal
        size=""
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Material Baru</Modal.Title>
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
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Nama..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="3">
                    Tipe
                  </Form.Label>
                  <Col sm="6">
                    <Form.Select defaultValue="Pilih Produk..."  style={{cursor:'pointer'}}>
                      <option>Pilih Tipe...</option>
                      <option>Alat & Bahan</option>
                      <option>Pernik</option>
                      <option>Bahan keras</option>
                      <option>Kuningan</option>
                      <option>Kuningan</option>
                      <option>Kuningan</option>
                      <option>Kuningan</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Harga
                  </Form.Label>
                  <Col>
                    <Form.Control type="number" placeholder="..." />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <Col>
              <div
                className="d-flex justify-content-end"
                style={{ marginRight: "4%" }}
              >
                <Button
                  as="input"
                  type="submit"
                  value="Tambah Material"
                  className="button-submit-prosuksi"
                />
                <Button
                  onClick={() => setSelectedImage(null)}
                  as="input"
                  type="submit"
                  value="Hapus"
                  className="button-cencel-prosuksi"
                  style={{ marginRight: "2%" }}
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={lgShowDetail}
        onHide={() => setLgShowDetail(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-Material">Detail Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm="4">
              <div className="d-flex mb-3 justify-content-center">
                <Image
                  style={{ height: "150px", width: "150px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                  rounded
                />
              </div>
            </Col>
            <Col style={{ fontSize: "13px" }}>
              <Row className="mt-3">
                <Col sm="3">
                  <text>Nama</text>
                </Col>
                <Col>
                  <text>Tas</text>
                </Col>
                <Col sm="3">
                  <text>Stok</text>
                </Col>
                <Col>
                  <text>30.000</text>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col sm="3">
                  <text>Tipe</text>
                </Col>
                <Col>
                  <Container
                    className="d-flex justify-content-center"
                    style={{
                      backgroundColor: "rgb(201, 197, 197)",
                      padding: "5px",
                      borderRadius: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <strong>Aksesoris</strong>
                  </Container>
                </Col>
                <Col sm="3">
                  <text>Satuan</text>
                </Col>
                <Col>
                  <text>Meter</text>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col sm="5">
                  <text>Biaya per Satuan</text>
                </Col>
                <Col>
                  <strong style={{ fontStyle: "italic" }}>30.000</strong>
                </Col>
              </Row>
            </Col>
            <div className="d-flex mb-2 justify-content-center">
              <Button
                as="input"
                type="submit"
                value="Ubah Material"
                className="button-edit-produk"
                onClick={() => setLgShowEdit(true)}
              />
              <Button
                as="input"
                type="submit"
                value="Hapus"
                className="button-cencel-prosuksi"
                onClick={() => setLgShowDell(true)}
              />
            </div>
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
          <Modal.Title id="modal-detail-produk">
            Hapus Material ini ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button
              as="input"
              type="submit"
              value="Hapus"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              onClick={() => setLgShowDell(false)}
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={lgShowEdit}
        onHide={() => setLgShowEdit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Material</Modal.Title>
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
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Nama..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="3">
                    Tipe
                  </Form.Label>
                  <Col sm="6">
                    <Form.Select defaultValue="Pilih Produk..." style={{cursor:'pointer'}}>
                      <option>Pilih Tipe...</option>
                      <option>Alat & Bahan</option>
                      <option>Pernik</option>
                      <option>Bahan keras</option>
                      <option>Kuningan</option>
                      <option>Kuningan</option>
                      <option>Kuningan</option>
                      <option>Kuningan</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Harga
                  </Form.Label>
                  <Col>
                    <Form.Control type="number" placeholder="..." />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <Col>
              <div
                className="d-flex justify-content-end"
                style={{ marginRight: "4%" }}
              >
                <Button
                  as="input"
                  type="submit"
                  value="Selesai"
                  className="button-submit-prosuksi"
                />
                <Button
                  onClick={() => setSelectedImage(null)}
                  as="input"
                  type="submit"
                  value="Batal"
                  className="button-cencel-prosuksi"
                  style={{ marginRight: "2%" }}
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Row>
        <Col>
          <h3>Material</h3>
        </Col>
        <Col>
          <div
            className="d-flex justify-content-end"
            style={{ marginBottom:"10px" }}
          >
            <Button
              as="input"
              type="submit"
              value="Tambah Material"
              className="button-submit-prosuksi"
              onClick={() => setLgShow(true)}
            />
          </div>
        </Col>
      </Row>

      <div class="shadow-sm p-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Data Material</h3>
          <Row>
            {loading ? materialData.map((material) => {
              return (
                <Col sm="3">
                  <div
                    class="shadow-sm m-3 bg-body rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => setLgShowDetail(true)}
                  >
                    <div className="d-flex justify-content-center">
                      <Image
                        style={{ height: "150px", width: "150px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                        rounded
                      />
                    </div>
                    <p className="d-flex pb-3 justify-content-center">{material.name}</p>
                  </div>
                </Col>
              );
            }):
            <div>
              <LoadingData/>
            </div>
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DataMaterial;
