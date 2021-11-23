import Button from "@restart/ui/esm/Button";
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
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const DataProduk = () => {
  let history = useHistory();
  const [lgShowDetail, setLgShowDetail] = useState(false);
  const [LgShowEdit, setLgShowEdit] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [productData, setProductData] = useState([]);

  const [productName, setProductName] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [productCost, setProductCost] = useState([]);
  const [materialList, setMaterialList] = useState([]);

  const handleModalDetail = (props) => {
    setLgShowDetail(true);
    setProductName(props.name);
    setProductCategory(props);
    setProductCost(props.cost);
    console.log(props);
    console.log(materialList);
    // renderMaterialList(props);
  };
  // const renderMaterialList = (props) => {
  //   // setProductId(props.id);
  //   axios.get("/api/product/" + props.id).then((res) => {
  //     setMaterialList(res.data);
  //     console.log("rendered", res.data);
  //   });
  //   console.log(props.id);
  // };

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProductData(res.data);
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
                  <h4>{productName}</h4>
                  {/* <p>Kategori Produk</p> */}
                  <div className="d-flex justify-content-center">
                    <Container
                      style={{
                        backgroundColor: "rgb(201, 197, 197)",
                        marginLeft: "20px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      {productCategory.categoryId
                        ? productCategory.categories.name
                        : null}
                    </Container>
                  </div>
                  <text>Biaya Produksi Satuan</text>
                  <h5>
                    Rp. <text>{productCost}</text>
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
                        <th>Material</th>
                        <th>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {materialList.map((data) => {
                        return (
                          <tr key={data.id} data={data}>
                            <td>{data.materials.name}</td>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                        );
                      })} */}

                      <tr>
                        <td>Kain</td>
                        <td>3 meter</td>
                      </tr>
                      <tr>
                        <td>Denim</td>
                        <td>1 meter</td>
                      </tr>
                      <tr>
                        <td>Pengait</td>
                        <td>2 pcs</td>
                      </tr>
                      <tr>
                        <td>Resleting</td>
                        <td>4 pcs</td>
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
            style={{ marginRight: "7%" }}
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
            {productData.map((product) => {
              return (
                <Col sm="3">
                  <div
                    class="shadow-sm m-3 bg-body rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleModalDetail(product)}
                  >
                    <div className="d-flex justify-content-center">
                      <Image
                        style={{ height: "170px", width: "170px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                        rounded
                      />
                    </div>
                    <p style={{ textAlign: "center" }}>{product.name}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DataProduk;
