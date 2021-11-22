import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Table,
  Button
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoadingData from "../../../Components/LoadingProduct";

const DataProduk = () => {
  let history = useHistory();
  const [lgShowDetail, setLgShowDetail] = useState(false);
  const [LgShowEdit, setLgShowEdit] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProductData(res.data);
        setLoading(true); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="marginBody"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <Modal
        size="lg"
        show={lgShowDetail}
        onHide={() => setLgShowDetail(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Detail Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Row>
            <Col sm="5">
              <div>
                <div className="d-flex justify-content-center">
                  <Image
                    style={{ height: "170px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                    rounded
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4>Tas</h4>
                  <p>Kategori Produk</p>
                  <div className="d-flex justify-content-center">
                    <Container
                      style={{
                        backgroundColor: "rgb(201, 197, 197)",
                        marginLeft: "20px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      Aksesoris
                    </Container>
                    <Container
                      style={{
                        backgroundColor: "rgb(201, 197, 197)",
                        marginLeft: "10px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      Gaya Hidup
                    </Container>
                  </div>
                  <text>Biaya Produksi Satuan</text>
                  <h5>
                    Rp. <text>200.000.000</text>
                  </h5>
                  <div className="d-flex justify-content-center">
                    <Button
                      as="input"
                      type="submit"
                      value="Ubah Produk"
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
                </div>
              </div>
            </Col>
            <Col>
              <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <h5>Material</h5>
                <text>Data Material yang digunakan</text>
                <div style={{ marginTop: "5%" }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={LgShowEdit}
        onHide={() => setLgShowEdit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Produk</Modal.Title>
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="d-flex justify-content-end"
                style={{
                  marginTop: "20px",
                  marginLeft: "37px",
                  paddingRight: "35px",
                }}
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
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control type="email" placeholder="Email..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Jabatan
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Jabatan..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Username
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Username..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Password
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Password..." />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <Col>
              <div className="d-flex mt-2 justify-content-center">
                <Button
                  as="input"
                  type="submit"
                  value="Selesai"
                  className="button-submit-prosuksi"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                  onClick={() => setLgShowEdit(false)}
                />
              </div>
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
          <Modal.Title id="modal-detail-produk">Hapus Produk ini ?</Modal.Title>
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

      <Row>
        <Col>
          <h3>Produk</h3>
        </Col>
        <Col>
          <div
            className="d-flex justify-content-end"
            style={{ marginBottom:'10px' }}
          >
            <Button
              as="input"
              type="submit"
              value="Tambah Produk"
              className="button-submit-prosuksi"
              onClick={() => history.push(`/manajemen/produk`)}
            />
          </div>
        </Col>
      </Row>

      <div className="shadow-sm p-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Data Produk</h3>
          <Row>
            {loading ? productData.map((product) => {
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
                    <p className="d-flex pb-3 justify-content-center">{product.name}</p>
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

export default DataProduk;
