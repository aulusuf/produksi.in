import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';

const Tipe = () => {
  
  const [LgShowAdd, setLgShowAdd] = useState(false);
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="marginBody">

      <Modal
        size=""
        show={LgShowAdd}
        onHide={() => setLgShowAdd(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Tipe Baru
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{marginTop:'2%'}}>
            <Col sm={3}>
              <div className="d-flex justify-content-center">
                <div >
                <div>
                  {selectedImage && (
                    <div>
                      <div  class="shadow-sm bg-body rounded">
                        <img alt="" width={"100px"} height={"100px"} src={URL.createObjectURL(selectedImage)} />
                      </div>
                      <div className="d-flex justify-content-center">
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end" style={{marginTop:'20px'}}>
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
                    <Button as="input" type="submit" value="Tambah" className="button-submit-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px', marginTop:'10%'}} onClick={() => setLgShowAdd(false)}/>
                  </div>
                </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowUpdate}
        onHide={() => setLgShowUpdate(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Edit Material
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{marginTop:'2%'}}>
            <Col sm={3}>
              <div className="d-flex justify-content-center">
                <div >
                <div>
                  {selectedImage && (
                    <div>
                      <div  class="shadow-sm bg-body rounded">
                        <img alt="" width={"100px"} height={"100px"} src={URL.createObjectURL(selectedImage)} />
                      </div>
                      <div className="d-flex justify-content-center">
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end" style={{marginTop:'20px'}}>
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
                    <Button as="input" type="submit" value="Selesai" className="button-submit-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px', marginTop:'10%'}} onClick={() => setLgShowAdd(false)}/>
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
            Hapus kategori ini ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px'}} onClick={() => setLgShowAdd(false)}/>
          </div>
        </Modal.Body>
      </Modal>
      
      <h1>Material</h1>

          <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
        
          
      <Row style={{ marginBottom:'2%'}}>
        <h4>Tambah Tipe / Ubah Material</h4>
            <Row style={{ marginTop:'2%'}}>
                <Col sm='4'>
                    <Form.Label column className="d-flex justify-content-end">
                        Nama
                    </Form.Label>
                </Col>
                <Col sm='3'>
                    <Form.Control type="text" placeholder="Nama..." />
                </Col>
                <Col>
                    <div>
                        <Button as="input" type="submit" value="Selesai" className="button-submit-prosuksi"/>
                        <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi"/>
                    </div>
                </Col>
            </Row>
          </Row>
        </Container>  
      </div>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
        
          <Row>
            <Col>
              <h3>Tipe</h3>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <Button as="input" type="submit" value="Tambah" className="button-submit-prosuksi" onClick={() => setLgShowAdd(true)}/>
              </div>
            </Col>
          </Row>
          <div style={{marginTop:'2%'}}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowUpdate(true)}/>
                      <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" onClick={() => setLgShowDell(true)}/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowUpdate(true)}/>
                      <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" onClick={() => setLgShowDell(true)}/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowUpdate(true)}/>
                      <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" onClick={() => setLgShowDell(true)}/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowUpdate(true)}/>
                      <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" onClick={() => setLgShowDell(true)}/>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>  
      </div>
    </div>
  );
};

export default Tipe;
