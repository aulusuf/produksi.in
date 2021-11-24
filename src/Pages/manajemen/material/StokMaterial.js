import axios from "axios";
import React, { useState, useEffect } from "react";
import StockMaterialTable from "../../../Data/StockMaterial.table";
// import StockProductTable from "../../../Data/StockProduct.table";
import { Bars } from "@agney/react-loading";
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

const StokMaterial = () => {
  const [LgShowUpdateM, setLgShowUpdateM] = useState(false);
  const [LgShowUpdateP, setLgShowUpdateP] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [stokProduct, setStokProduct] = useState([]);
  const [stokMaterial, setStokMaterial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stockM, setStockM] = useState();
  const [stockMId, setMId] = useState();
  const [stockP, setStockP] = useState();
  const [stockPId, setPId] = useState();

  const handleModalUbahM = (props) => {
    setLgShowUpdateM(true);
    setStockM(props.stock);
    setMId(props.id);
  };

  const handleUbahM = () => {
    axios.put("/api/material/" + stockMId, { stock: stockM }).then((res) => {
      // console.log(res.data);
      setLgShowUpdateM(false);
    });
  };

  const handleModalUbahP = (props) => {
    setLgShowUpdateP(true);
    setStockP(props.stock);
    setPId(props.id);
  };

  const handleUbahP = () => {
    axios.put("/api/product/" + stockPId, { stock: stockP }).then((res) => {
      // console.log(res.data);
      setLgShowUpdateP(false);
    });
  };

  // const [stokProduk, setStokProduk] = useState([]);
  // const [stokMaterial, setStokMaterial] = useState([]);

  // useEffect(() => {
  //   const reqMaterial = axios.get("/api/materials");
  //   const reqProduct = axios.get("/api/products");

  //   axios
  //     .all([reqMaterial, reqProduct])
  //     .then(
  //       axios.spread((...response) => {
  //         const resReqMaterial = response[0];
  //         const resReqProduct = response[1];
  //         console.log(resReqMaterial, resReqProduct);
  //       })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setStokProduct(res.data);
        setLoading(true);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/api/materials")
      .then((res) => {
        setStokMaterial(res.data);
        setLoading(true);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="marginBody">
      {/* MODAL UPDATE MATERIAL */}
      <Modal
        size="sm"
        show={LgShowUpdateM}
        onHide={() => setLgShowUpdateM(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Jumlah
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Jumlah..."
                      defaultValue={stockM}
                      onChange={(event) => setStockM(event.target.value)}
                    />
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
                    onClick={() => handleUbahM()}
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* MODAL UPDATE PRODUCT */}
      <Modal
        size="sm"
        show={LgShowUpdateP}
        onHide={() => setLgShowUpdateP(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Jumlah
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Jumlah..."
                      defaultValue={stockP}
                      onChange={(event) => setStockP(event.target.value)}
                    />
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
                    onClick={() => handleUbahP()}
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {/* MODAL DELETE MATERIAL */}
      {/* <Modal
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
      </Modal> */}

      <h1>Stok</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row>
            <Col>
              <h3>Material</h3>
            </Col>
          </Row>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th width="50">#</th>
                  <th width="250">Material</th>
                  <th width="180">Tipe</th>
                  <th width="80">Stok</th>
                  <th width="50">Satuan</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  stokMaterial.map((material, index) => {
                    return (
                      <tr key={material.id}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td>{material.name}</td>
                        <td>{material.types.name}</td>
                        <td style={{ textAlign: "right" }}>
                          {material.stock}{" "}
                        </td>
                        <td>{material.units ? material.units.name : null}</td>
                        <td className="d-flex justify-content-center">
                          <Button
                            as="input"
                            type="submit"
                            value="Ubah"
                            className="button-edit-produk"
                            onClick={() => handleModalUbahM(material)}
                          />
                          {/* <Button
                            as="input"
                            type="submit"
                            value="Hapus"
                            className="button-cencel-prosuksi"
                            // onClick={() => setLgShowDell(true)}
                          /> */}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "635%", marginTop: "20px" }}
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
          <Row>
            <Col>
              <h3>Produk</h3>
            </Col>
            {/* <Col>
              <div
                className="d-flex justify-content-end"
                style={{ marginRight: "7%" }}
              >
                <Button
                  as="input"
                  type="submit"
                  value="Ubah Stok"
                  className="button-submit-prosuksi"
                  onClick={() => setLgShow(true)}
                />
              </div>
            </Col> */}
          </Row>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th width="50">#</th>
                  <th width="250">Produk</th>
                  <th width="180">Kategori</th>
                  <th width="80">Stok</th>
                  <th width="50">Satuan</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  stokProduct.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.categories.name}</td>
                        <td style={{ textAlign: "right" }}>{product.stock}</td>
                        <td>{product.units ? product.units.name : null}</td>
                        <td className="d-flex justify-content-center">
                          <Button
                            as="input"
                            type="submit"
                            value="Ubah"
                            className="button-edit-produk"
                            onClick={() => handleModalUbahP(product)}
                          />
                          {/* <Button
                            as="input"
                            type="submit"
                            value="Hapus"
                            className="button-cencel-prosuksi"
                            // onClick={() => setLgShowDell(true)}
                          /> */}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "635%", marginTop: "20px" }}
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

export default StokMaterial;
