import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
  Button,
} from "react-bootstrap";
import {Bars} from '@agney/react-loading';

const Tipe = () => {
  const [LgShowAdd, setLgShowAdd] = useState(false);
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [newType, setNewType] = useState("");
  const [typeData, setTypeData] = useState([]);
  const [oldType, setOldType] = useState([]);
  const [updatedType, setUpdatedType] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleModalUbah = (props) => {
    console.log(props);
    setOldType(props);
    setLgShowUpdate(true);
  };

  const handleUbah = (props) => {
    console.log(oldType.id);
    console.log(updatedType);
    axios.put("/api/type/" + oldType.id, { name: updatedType }).then((res) => {
      setUpdatedType(res.data);
      setLgShowUpdate(false);
    });
  };

  const handleModalHapus = (props) => {
    setLgShowDell(true);
    setOldType(props);
    console.log(props);
  };
  const handleHapus = () => {
    axios.delete("/api/type/" + oldType.id).then(() => {
      setLgShowDell(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/type/create", { name: newType })
      .then((res) => {
        console.log(res);
        setNewType("");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios.get("/api/types").then((res) => {
      setTypeData(res.data);
      setLoading(true); 
    });
  });

  return (
    <div className="marginBody">
      <Modal
        size=""
        show={LgShowUpdate}
        onHide={() => setLgShowUpdate(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col sm={9}>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Nama..."
                      defaultValue={oldType.name}
                      onChange={(e) => setUpdatedType(e.target.value)}
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
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "10%",
                    }}
                    onClick={() => handleUbah()}
                  />
                </div>
              </Col>
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
          <Modal.Title id="modal-detail-produk">
            Hapus material ini ?
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
              onClick={() => handleHapus()}
            />
          </div>
        </Modal.Body>
      </Modal>

      <h1>Material</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row style={{ marginBottom: "2%" }}>
            <h4>Tambah Tipe</h4>
            <Row style={{ marginTop: "2%" }}>
              <Col sm="4">
                <Form.Label column className="d-flex justify-content-end">
                  Nama
                </Form.Label>
              </Col>
              <Col sm="3">
                <Form.Control
                  type="text"
                  placeholder="Nama..."
                  value={newType}
                  onChange={({ target }) => setNewType(target.value)}
                />
              </Col>
              <Col>
                <div>
                  <Button
                    as="input"
                    type="submit"
                    value="Tambah Tipe"
                    className="button-submit-prosuksi"
                    onClick={handleSubmit}
                  />
                  {/* <Button
                    as="input"
                    type="submit"
                    value="Batal"
                    className="button-cencel-prosuksi"
                  /> */}
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row>
            <Col>
              <h3>Tipe</h3>
            </Col>
          </Row>
          <div style={{ marginTop: "2%" }}>
            <Table striped bordered hover>
              <thead>
                <tr style={{textAlign:'center'}}>
                  <th width="50">#</th>
                  <th width="100">ID</th>
                  <th width="450">Nama Tipe</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? typeData.map((type, index) => {
                  return (
                    <tr key={type.id} data={type}>
                      <td style={{textAlign:'center'}}>{index + 1}</td>
                      <td style={{textAlign:'center'}}>0321{type.id}</td>
                      <td>{type.name}</td>
                      <td className="d-flex justify-content-center">
                        <Button
                          // as="input"
                          // type="submit"
                          className="button-edit-produk"
                          // value="ubah"
                          onClick={() => handleModalUbah(type)}
                          // onClick={() => setLgShowUpdate(true)}
                        >
                          Ubah
                        </Button>
                        <Button
                          as="input"
                          type="submit"
                          value="Hapus"
                          className="button-cencel-prosuksi"
                          onClick={() => handleModalHapus(type)}
                        />
                      </td>
                    </tr>
                  );
                }):
                <div>
                  <Bars width="50" color="#2f89e4" style={{marginLeft:'650%', marginTop:'20px'}}/>
                </div>
                }
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Tipe;

/* <Modal
size=""
show={LgShowAdd}
onHide={() => setLgShowAdd(false)}
aria-labelledby="example-modal-sizes-title-lg"
centered
dialogClassName="border-radius-10"
>
<Modal.Header closeButton>
  <Modal.Title id="modal-detail-produk">Tipe Baru</Modal.Title>
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
        <Form.Group as={Row} className="mb-2" controlId="formJumlah">
          <Form.Label column sm="3">
            Nama
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Nama..." />
          </Col>
        </Form.Group>
      </Row>
      <Col>
        <div className="d-flex mt-2 justify-content-center">
          <Button
            as="input"
            type="submit"
            value="Tambah"
            className="button-submit-prosuksi"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              marginTop: "10%",
            }}
            onClick={() => setLgShowAdd(false)}
          />
        </div>
      </Col>
    </Col>
  </Row>
</Modal.Body>
</Modal> */
