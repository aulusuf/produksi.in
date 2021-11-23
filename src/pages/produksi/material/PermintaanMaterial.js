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
import { Bars } from "@agney/react-loading";

const PermintaanMaterial = () => {
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowCreate, setLgShowCreate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [requestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [productId, setProductId] = useState();
  const [materialId, setMaterialId] = useState();
  const [amount, setAmount] = useState();
  const [materialList, setMaterialList] = useState([]);

  const [oldProductId, setOldProductId] = useState();
  const [oldMaterialId, setOldMaterialId] = useState();
  const [oldAmount, setOldAmount] = useState();

  const [requestId, setRequestId] = useState();

  // const [oldProductId, setOldProductId] = useState();
  // const [oldMaterialId, setOldMaterialId] = useState();
  // const [oldAmount, setOldAmount] = useState();

  const [productionAssigned, setProductionAssigned] = useState([]);

  const handleDropdownProduk = (props) => {
    console.log(props);
    setProductId(props);
    axios.get("/api/product_material/product/" + props).then((res) => {
      console.log(res.data);
      setMaterialList(res.data);
    });
  };
  const handleDropdownMaterial = (props) => {
    console.log(props);
    setMaterialId(props);
  };

  const newRequest = (event) => {
    event.preventDefault();
    const input = { productId, materialId, amount, statusId: 1 };
    console.log(input);
    axios.post("/api/material_request/create", input).then((res) => {
      console.log(res.data);
      setLgShowCreate(false);
    });
  };

  const handleUbah = (props) => {
    console.log(props);
    setRequestId(props.id);
    setOldProductId(props.productId);
    setOldMaterialId(props.materialId);
    setOldAmount(props.amount);
    setLgShowUpdate(true);
    axios
      .get("/api/product_material/product/" + props.productId)
      .then((res) => {
        console.log(res.data);
        setMaterialList(res.data);
      });
  };

  const handleDelete = (props) => {
    console.log(props);
    setRequestId(props.id);
    setLgShowDell(true);
  };

  const deleteRequest = () => {
    console.log(requestId);
    axios.delete("/api/material_request/" + requestId).then((res) => {
      console.log(res.data);
      setLgShowDell(false);
    });
  };

  useEffect(() => {
    axios.get("/api/material_request/status/1").then((res) => {
      setRequestList(res.data);
      setLoading(true);
    });
    axios.get("/api/product_assignment/status/2").then((res) => {
      setProductionAssigned(res.data);
    });
    // axios.get("/api/product_material");
  });

  return (
    <div className="marginBody">
      {/* MODAL BUAT */}
      <Modal
        size="lg"
        show={LgShowCreate}
        onHide={() => setLgShowCreate(false)}
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
                style={{ cursor: "pointer" }}
                value={productId}
                onChange={(event) => handleDropdownProduk(event.target.value)}
              >
                <option>Pilih Produk</option>
                {productionAssigned.map((productList) => {
                  return (
                    <option value={productList.productId}>
                      {productList.productId ? productList.products.name : null}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Pilih Material
              </div>
              <Form.Select
                style={{ cursor: "pointer" }}
                value={materialId}
                onChange={(event) => handleDropdownMaterial(event.target.value)}
              >
                <option>Pilih Produk</option>
                {materialList.map((materialData) => {
                  return (
                    <option value={materialData.materialId}>
                      {materialData.materialId
                        ? materialData.material.name
                        : null}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Jumlah Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah"
                // value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </Col>
          </Row>
          <Col>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                as="input"
                type="submit"
                value="Buat Permintaan"
                className="button-submit-prosuksi"
                onClick={newRequest}
              />
              <Button
                as="input"
                type="submit"
                value="Batal"
                className="button-cencel-prosuksi"
                onClick={() => setLgShowCreate(false)}
              />
            </div>
          </Col>
        </Modal.Body>
      </Modal>

      {/* MODAL UBAH */}
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
            Ubah Permintaan Material
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Pilih Produk
              </div>
              <Form.Select
                style={{ cursor: "pointer" }}
                defaultValue={oldProductId}
                onChange={(event) => handleDropdownProduk(event.target.value)}
              >
                <option>Pilih Produk</option>
                {productionAssigned.map((productList) => {
                  return (
                    <option value={productList.productId}>
                      {productList.productId ? productList.products.name : null}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Pilih Material
              </div>
              <Form.Select
                style={{ cursor: "pointer" }}
                defaultValue={oldMaterialId}
                onChange={(event) => handleDropdownMaterial(event.target.value)}
              >
                <option>Pilih Produk</option>
                {materialList.map((materialData) => {
                  return (
                    <option value={materialData.materialId}>
                      {materialData.materialId
                        ? materialData.material.name
                        : null}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col sm="3">
              <div className="d-flex justify-content-center mb-3">
                Jumlah Material
              </div>
              <Form.Control
                className="mt-1"
                type="number"
                placeholder="Jumlah"
                value={oldAmount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </Col>
          </Row>
          <Col>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                as="input"
                type="submit"
                value="Buat Permintaan"
                className="button-submit-prosuksi"
                onClick={newRequest}
              />
              <Button
                as="input"
                type="submit"
                value="Batal"
                className="button-cencel-prosuksi"
                onClick={() => setLgShowUpdate(false)}
              />
            </div>
          </Col>
        </Modal.Body>
      </Modal>

      {/* MODAL BATALKAN */}
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
              onClick={() => deleteRequest()}
            />
          </div>
        </Modal.Body>
      </Modal>

      <h1>Produksi</h1>
      <div className="shadow-sm p-3 mt-3 bg-body rounded">
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
                  onClick={() => setLgShowCreate(true)}
                />
              </div>
            </Col>
          </Row>
          <div style={{ marginTop: "2%" }}>
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th width="50">#</th>
                  <th width="250">Produk</th>
                  <th width="180">Material</th>
                  <th width="100">Jumlah</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  requestList.map((request, index) => {
                    return (
                      <tr key={request.id} data={request}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td>{request.products.name}</td>
                        <td>{request.materials.name}</td>
                        <td style={{ textAlign: "center" }}>
                          {request.amount}
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              as="input"
                              type="submit"
                              value="Ubah"
                              className="button-edit-produk"
                              onClick={() => handleUbah(request)}
                            />
                            <Button
                              as="input"
                              type="submit"
                              value="Batal"
                              className="button-cencel-prosuksi"
                              onClick={() => handleDelete(request)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "650%", marginTop: "20px" }}
                    />
                  </div>
                )}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>

      <div className="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Riwayat Permintaan Material</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th width="50">#</th>
                  <th width="250">Produk</th>
                  <th width="180">Material</th>
                  <th width="100">Jumlah</th>
                  <th width="100">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  requestList.map((request, index) => {
                    return (
                      <tr key={request.id} data={request}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td>{request.products.name}</td>
                        {/* {console.log(request)} */}
                        <td>{request.materials.name}</td>
                        <td style={{ textAlign: "center" }}>
                          {request.amount}
                        </td>
                        <td className="text-center">
                          {request.statusId === 1
                            ? "Pending"
                            : request.statusId === 2
                            ? "Sedang dikirim"
                            : request.statusId === 3
                            ? "Selesai"
                            : null}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>
                    <Bars
                      width="50"
                      color="#2f89e4"
                      style={{ marginLeft: "570%", marginTop: "20px" }}
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

export default PermintaanMaterial;

/* <Row>
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
          </Row> */
