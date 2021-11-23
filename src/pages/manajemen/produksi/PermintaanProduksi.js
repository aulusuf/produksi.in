// import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Table,
  Image,
  Button,
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
  const [materialUsed, setMaterialUsed] = useState([]);

  const handleBuatPermintaan = (event) => {
    event.preventDefault();
    const input = { productId, amount, description, statusId: 1 };
    console.log(input);
    axios.post("/api/product_assignment/create", input).then((res) => {
      console.log(res.data);
      history.replace("/manajemen/produksi/selesai");
    });
  };

  const countAmount = (props) => {
    // console.log("halooo", props.amount);
    let jumlah = props.amount * amount;
    return jumlah;
  };

  const handleDropdown = (props) => {
    setProductId(props);
    console.log(props);
    axios.get("api/product_material/product/" + props).then((res) => {
      setMaterialUsed(res.data);
      console.log(res.data);
    }, []);
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
              <div className="">
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
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image
                      style={{ height: "150px", width: "150px" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                      rounded
                    />
                  </div>
                </div>
                {/* <div> */}
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
                        value={productId}
                        onChange={(event) => handleDropdown(event.target.value)}
                      >
                        {pilihProduk.map((produk) => {
                          return (
                            <>
                              <option value={produk.id}>{produk.name}</option>
                            </>
                          );
                        })}
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Row>
                {/* </div> */}
              </div>
              <Row style={{ marginTop: "10px" }}>
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Form.Label column sm="4">
                    Jumlah
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      placeholder="Jumlah yang ingin diproduksi"
                      defaultValue={0}
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
                        // placeholder="Leave a comment here"
                        style={{ height: "200px" }}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <div className="d-flex mb-5 justify-content-center">
              <Button
                as="input"
                type="submit"
                value="Buat permintaan"
                className="button-submit-prosuksi"
                onClick={handleBuatPermintaan}
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              />
            </div>
          </Row>
          <div style={{ textAlign: "center" }}>
            <h3>Material</h3>
            <p>Data Material yang digunakan untuk produksi</p>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th width="50">#</th>
                <th width="350">Material</th>
                <th width="150">Stok</th>
                <th width="150">Jumlah dibutuhkan</th>
              </tr>
            </thead>
            <tbody>
              {materialUsed.map((material, index) => {
                return (
                  <tr>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td>
                      {material.materialId ? material.material.name : null}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {material.material ? material.material.stock : null}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {countAmount(material)}
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td>Resleting</td>
                <td style={{ textAlign: "center" }}>2000</td>
                <td style={{ textAlign: "center" }}>3</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td>Denim</td>
                <td style={{ textAlign: "center" }}>1000</td>
                <td style={{ textAlign: "center" }}>10</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>3</td>
                <td>Lem</td>
                <td style={{ textAlign: "center" }}>30</td>
                <td style={{ textAlign: "center" }}>32</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>4</td>
                <td>Pengait</td>
                <td style={{ textAlign: "center" }}>200</td>
                <td style={{ textAlign: "center" }}>249</td>
              </tr> */}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default BuatPermintaan;
