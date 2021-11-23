import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import "../styles/produksi.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { product } from "../../../../../server/app/models";

const BuatPermintaan = () => {
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(null);
  const [pilihProduk, setPilihProduk] = useState([]);
  const [jumlahProduksi, setJumlahProduksi] = useState();
  const [deskripsiProduksi, setDeskripsiProduksi] = useState();
  const [productId, setProductId] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [newData, setNewData] = useState();

  const handleBuatPermintaan = (event) => {
    // event.preventDefault();
    const input = { productId, amount, description };
    console.log(input);
    // axios.post('/api/product_request/create', input).then(res=>{
    //   console.log(res.data)
    //   history.replace('/')
    // })
  };
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setPilihProduk(res.data);
    });
  });

  return (
    <div className="marginBody">
      <h1>Produksi</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Permintaan Produksi Baru</h3>
          <Row style={{ marginTop: "5%" }}>
            <Col sm={5}>
              <div className="d-flex justify-content-center">
                <div>
                  <div>
                    {selectedImage && (
                      <div class="shadow-sm bg-body rounded">
                        <img
                          alt=""
                          width={"100px"}
                          height={"100px"}
                          src={URL.createObjectURL(selectedImage)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <Row style={{ marginTop: "20px" }}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="4">
                      Pilih Produk
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select
                        defaultValue="Pilih Produk..."
                        value={productId}
                      >
                        <>
                          {pilihProduk.map((produk) => {
                            return (
                              <option key={produk.id} value={produk.id}>
                                {produk.name}
                              </option>
                            );
                          })}
                        </>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Row>
              </div>
              <Row style={{ marginTop: "10px" }}>
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="4">
                    Jumlah
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      placeholder="..."
                      value={jumlahProduksi}
                      onChange={(event) => setAmount(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <Col sm={7}>
              <Row style={{ marginTop: "30px" }}>
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Deskripsi
                  </Form.Label>
                  <Col>
                    <FloatingLabel controlId="CommentDeskripsi">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "200px" }}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Form.Group>
                <Form.Label column sm="3">
                  Total Biaya
                </Form.Label>
                <Col sm="4" style={{ marginTop: "7px" }}>
                  <h5>
                    Rp. <text>200.000.000</text>
                  </h5>
                </Col>
                <Col>
                  <div className="d-flex justify-content-center">
                    <Button
                      as="input"
                      type="submit"
                      value="Buat Permintaan"
                      className="button-submit-prosuksi"
                      onClick={() => handleBuatPermintaan()}
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
              </Row>
            </Col>
          </Row>
          <div style={{ textAlign: "center" }}>
            <h3>Material</h3>
            <p>Data Material yang digunakan untuk produksi</p>
          </div>
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
        </Container>
      </div>
    </div>
  );
};

export default BuatPermintaan;
