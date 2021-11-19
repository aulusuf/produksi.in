import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Image, Modal, Row, Table } from 'react-bootstrap';

const StokMaterial = () => {
  const [lgShow, setLgShow] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
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
          <Modal.Title id="modal-detail-produk">
            Ubah Stok Material
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm='4'>
                <div className="d-flex justify-content-center">
                  <Image style={{height:'120px', width:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
            </Col>
            <Col style={{fontSize:'13px'}}>
              <Row className="mt-3">
                <Col sm='3'>
                  <text>Nama</text>
                </Col>
                <Col>
                  <text>Tas</text>
                </Col>
                <Col sm='3'>
                  <text>Stok</text>
                </Col>
                <Col>
                  <text>30.000</text>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col sm='3'>
                  <text>Tipe</text>
                </Col>
                <Col>
                  <Container className="d-flex justify-content-center" style={{backgroundColor:'rgb(201, 197, 197)', padding:'5px', borderRadius:'10px', fontSize:'10px'}}>
                    <strong>Aksesoris</strong>
                  </Container>
                </Col>
                <Col sm='3'>
                  <text>Satuan</text>
                </Col>
                <Col>
                  <text>Meter</text>
                </Col>
              </Row>
              
              <Row className="mt-3 mb-3">
                <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                  <Col sm='5' className="d-flex justify-content-center">
                    <Form.Label column sm="3">
                      Ubah
                    </Form.Label>
                  </Col>
                  <Col sm='6'>
                    <Form.Control type="number" placeholder="" />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
              <div className="d-flex mb-2 justify-content-center">
                <Button as="input" type="submit" value="Tambah Stok" className="button-submit-prosuksi" onClick={() => setLgShow(true)}/>
                <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" onClick={()=>setLgShowDell(true)}/>
              </div>
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
            Hapus Material ini ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px'}} onClick={() => setLgShowDell(false)}/>
          </div>
        </Modal.Body>
      </Modal>

      <h1>Material</h1> 

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <Row>
              <Col>
                <h3>Stok</h3>
              </Col>
              <Col>
                <div className="d-flex justify-content-end" style={{marginRight:'7%'}}>
                  <Button as="input" type="submit" value="Ubah Stok" className="button-submit-prosuksi" onClick={() => setLgShow(true)}/>
                </div>
              </Col>
            </Row>
            <div style={{marginTop:'5%'}}>
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
        </div>
    </div>
  );
};

export default StokMaterial;
