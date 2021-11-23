import React, { useState, useEffect } from "react";
import {
  Table,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { Bars } from "@agney/react-loading";

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
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [oldSelectedUser, setOldSelectedUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const [updaterUser, setUpdaterUser] = useState({
    name: "",
    email: "",
    roleId: "",
    username: "",
    password: "",
  });

  const handleModalLihat = (props) => {
    setSelectedUser(props);
    // setSelectedUserRole(props.roles.name);
    console.log(props);
    if (selectedUser.roles) {
      return "ada";
    } else {
      return "tida ada";
    }
    setLgShowProfil(true);
  };

  const handleModalUbah = (props) => {
    setLgShowPegawaiEdit(true);
    setUpdaterUser({
      name: props.name,
      email: props.email,
      roleId: props.roleId,
      username: props.username,
      password: "",
    });
    setOldSelectedUser(props);
    console.log(props);
  };

  const handleUbah = () => {
    console.log(oldSelectedUser.name);
    console.log(updaterUser);
    axios.put("/api/user/" + oldSelectedUser.id, updaterUser).then((res) => {
      setLgShowPegawaiEdit(false);
      console.log(res.data);
    });
  };

  const handleSubmit = (e) => {
    const newUser = { name, email, roleId, username, password };
    e.preventDefault();
    axios.post("/api/signup", newUser).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
    setLgShow(false);
  };

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUserData(res.data);
      setLoading(true);
      // console.log(res.data);
    });
  });
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
                  value="Tambah Pegawai"
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
                <Col>{selectedUser.name}</Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">Email</Col>
                <Col>{selectedUser.email}</Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">Jabatan</Col>
                <Col>
                  {/* <strong>{selectedUser.roleId}</strong> */}
                  <strong>
                    {selectedUser.roles ? selectedUser.roles.name : null}
                    {/* cek roles apakah ada jika ada lempar roles.name */}
                  </strong>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">Username</Col>
                <Col>{selectedUser.username}</Col>
              </Row>
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
                    <Form.Control
                      type="text"
                      placeholder="Nama..."
                      defaultValue={oldSelectedUser.name}
                      onChange={(e) =>
                        setUpdaterUser({ ...updaterUser, name: e.target.value })
                      }
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
                      defaultValue={oldSelectedUser.email}
                      // onChange={(e) => setUpdatedUserEmail(e.target.value)}
                      onChange={(e) =>
                        setUpdaterUser({
                          ...updaterUser,
                          email: e.target.value,
                        })
                      }
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
                      defaultValue={oldSelectedUser.roleId}
                      // onChange={(e) => setUpdatedUserRole(e.target.value)}
                      onChange={(e) =>
                        setUpdaterUser({
                          ...updaterUser,
                          roleId: e.target.value,
                        })
                      }
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
                      defaultValue={oldSelectedUser.username}
                      // onChange={(e) => setUpdatedUserUsername(e.target.value)}
                      onChange={(e) =>
                        setUpdaterUser({
                          ...updaterUser,
                          username: e.target.value,
                        })
                      }
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
                      type="password"
                      placeholder="Password..."
                      // onChange={(e) => setUpdatedUserPassword(e.target.value)}
                      onChange={(e) =>
                        setUpdaterUser({
                          ...updaterUser,
                          password: e.target.value,
                        })
                      }
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
                  value="Ubah"
                  className="button-submit-prosuksi"
                  onClick={() => {
                    handleUbah();
                  }}
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
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th width="50">#</th>
                  <th width="220">Nama</th>
                  <th width="200">Email</th>
                  <th width="120">Role</th>
                  <th width="120">Username</th>
                  <th width="120">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  userData.map((user, index) => {
                    return (
                      <tr key={user.id} data={user}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.roles.name}</td>
                        <td>{user.username}</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              as="input"
                              variant="primary"
                              value="Lihat"
                              type="button"
                              className="button-submit-prosuksi"
                              onClick={() => handleModalLihat(user)}
                            />
                            <Button
                              as="input"
                              variant="warning"
                              value="Ubah"
                              type="button"
                              className="button-edit-produk"
                              onClick={() => handleModalUbah(user)}
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
                      style={{ marginLeft: "750%", marginTop: "20px" }}
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

export default DataPegawai;
