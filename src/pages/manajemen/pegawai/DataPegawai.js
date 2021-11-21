import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import { Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { FaLastfmSquare } from "react-icons/fa";
import UserTable from "../../../Data/UserTable";

const DataPegawai = () => {
  const [lgShow, setLgShow] = useState(false);
  const [LgShowProfil, setLgShowProfil] = useState(false);
  const [LgShowPegawaiEdit, setLgShowPegawaiEdit] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [roleId, setRoleId] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();

  const [tableHead, setTableHead] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("/api/users")
  //     .then((res) => {
  //       const column = res.data[0] && Object.keys(res.data[0]);
  //       setTableHead(column);
  //       console.log(tableHead);
  //       console.log(tableHead[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [userData]);

  const handleSubmit = (e) => {
    const newUser = { name, email, roleId, username, password };
    e.preventDefault();
    axios.post("/api/signup", newUser).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
    setLgShow(false);

    // axios.get("/api/users");
  };

  // console.log(userData);
  return (
    <div className="marginBody">
      <Modal
        size=""
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Pegawai Baru</Modal.Title>
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
                <Form.Group as={Row} className="mb-2" controlId="formNama">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control
                      value={name}
                      type="text"
                      placeholder="Nama..."
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formEmail">
                  <Form.Label column sm="3">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Email..."
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJabatan">
                  <Form.Label column sm="3">
                    Jabatan
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Jabatan..."
                      onChange={(event) => setRoleId(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formUsername">
                  <Form.Label column sm="3">
                    Username
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Username..."
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-4" controlId="formPassword">
                  <Form.Label column sm="3">
                    Password
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Password..."
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <Col>
              <div className="d-flex justify-content-center">
                <Button
                  as="input"
                  type="submit"
                  // value="Tambah Pegawai"
                  className="button-submit-prosuksi"
                  onClick={handleSubmit}
                />
                <Button
                  onClick={() => setSelectedImage(null)}
                  as="input"
                  type="submit"
                  value="Batal"
                  className="button-cencel-prosuksi"
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowProfil}
        onHide={() => setLgShowProfil(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Detail Pegawai</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col sm={4}>
              <div className="d-flex justify-content-center">
                <Image
                  style={{ height: "150px", width: "150px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                  rounded
                />
              </div>
            </Col>
            <Col sm={8}>
              <Row className="mb-2">
                <Col sm="3">Nama</Col>
                <Col>Farhan Ismail</Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">Email</Col>
                <Col>farhanismail@mail.com</Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">Jabatan</Col>
                <Col>
                  <strong>Manajemen</strong>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">Username</Col>
                <Col>Hannn</Col>
              </Row>
            </Col>
            <Col>
              <div className="d-flex justify-content-center">
                <Button
                  onClick={() => setLgShowPegawaiEdit(true)}
                  as="input"
                  type="submit"
                  value="Edit"
                  className="button-edit-produk"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowPegawaiEdit}
        onHide={() => setLgShowPegawaiEdit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-ubah-pegawai">Ubah Data Pegawai</Modal.Title>
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
                <Form.Group as={Row} className="mb-2" controlId="formNama">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Nama..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formEmail">
                  <Form.Label column sm="3">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control type="email" placeholder="Email..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJabatan">
                  <Form.Label column sm="3">
                    Jabatan
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Jabatan..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formUsername">
                  <Form.Label column sm="3">
                    Username
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Username..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-4" controlId="formPassword">
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
              <div className="d-flex justify-content-center">
                <Button
                  as="input"
                  type="submit"
                  value="Ubah"
                  className="button-submit-prosuksi"
                />
                <Button
                  as="input"
                  type="submit"
                  value="Hapus"
                  className="button-cencel-prosuksi"
                  onClick={() => setLgShowDell(true)}
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
          <Modal.Title id="modal-hapus-pegawai">Hapus Data ini ?</Modal.Title>
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

      <h1>Pegawai</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row>
            <Col>
              <h3>Data Pegawai</h3>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <Button
                  as="input"
                  type="submit"
                  value="Tambah"
                  className="button-submit-prosuksi"
                  onClick={() => setLgShow(true)}
                />
              </div>
            </Col>
          </Row>
          <div style={{ marginTop: "2%" }}>
            <UserTable
              lihat={() => setLgShowProfil(true)}
              ubah={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DataPegawai;
