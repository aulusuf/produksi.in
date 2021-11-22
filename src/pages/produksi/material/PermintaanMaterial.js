import React, { useState } from 'react';
import { Col, Container,  Form,  Image,  Modal, Row, Table, Button } from 'react-bootstrap';

const PermintaanMaterial = () => {
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="marginBody">

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
            Permintaan Material
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col sm='3'>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image style={{height:'120px', width:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                Pilih Produk
              </div>
              <div className="">
                <Form.Select defaultValue="Pilih Produk..."  style={{cursor:'pointer'}}>
                  <option>Pilih Produk...</option>
                  <option>Tas</option>
                  <option>Sepatu</option>
                  <option>Baju</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="d-flex mt-2 justify-content-center">Material</h4>
              <text className="d-flex justify-content-center" style={{fontSize:'14px'}}>Masukkan jumlah material yang ingin digunakan</text>
            </Col>
          </Row>
          <Row>
            <Col sm='3'>
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image style={{height:'120px', width:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
              </div>
              <div className="d-flex mt-1 justify-content-center" style={{fontStyle:'italic'}}>
                Material
              </div>
              <Form.Control className="mt-1" type="number" placeholder="Jumlah..." />
            </Col>
            <Col sm='3'>
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image style={{height:'120px', width:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
              </div>
              <div className="d-flex mt-1 justify-content-center" style={{fontStyle:'italic'}}>
                Material
              </div>
              <Form.Control className="mt-1" type="number" placeholder="Jumlah..." />
            </Col>
            <Col sm='3'>
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image style={{height:'120px', width:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
              </div>
              <div className="d-flex mt-1 justify-content-center" style={{fontStyle:'italic'}}>
                Material
              </div>
              <Form.Control className="mt-1" type="number" placeholder="Jumlah..." />
            </Col>
            <Col sm='3'>
              <div className="d-flex mt-2 justify-content-center">
                <div class="shadow-sm bg-body rounded">
                  <Image style={{height:'120px', width:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
              </div>
              <div className="d-flex mt-1 justify-content-center" style={{fontStyle:'italic'}}>
                Material
              </div>
              <Form.Control className="mt-1" type="number" placeholder="Jumlah..." />
            </Col>
          </Row>
          <Col>
            <div className="d-flex mt-4 justify-content-center">
              <Button as="input" type="submit" value="Buat Permintaan" className="button-submit-prosuksi"/>
              <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi" onClick={()=>setSelectedImage(null)}/>
            </div>
          </Col>
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
            Batalkan ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px'}} onClick={() => setLgShowDell(false)}/>
          </div>
        </Modal.Body>
      </Modal>
      
      <h1>Produksi</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
          <Row>
            <Col>
              <h3>Permintaan Material</h3>
            </Col>
            <Col>
              <div className="d-flex justify-content-end" style={{marginRight:'7%'}}>
                <Button as="input" type="submit" value="Buat Permintaan" className="button-submit-prosuksi" onClick={() => setLgShowUpdate(true)}/>
              </div>
            </Col>
          </Row>
          <div style={{marginTop:'2%'}}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>@mdo</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowUpdate(true)}/>
                      <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi" onClick={() => setLgShowDell(true)}/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>@fat</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <text style={{fontStyle:'italic', color:'#2479F9'}}>Dalam Proses</text>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jacob</td>
                  <td>@fat</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <text style={{fontStyle:'italic', color:'#2479F9'}}>Dalam Proses</text>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td>@fat</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <text style={{fontStyle:'italic', color:'#2479F9'}}>Dalam Proses</text>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>  
      </div>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
          <h3>Riwayat Permintaan Material</h3>
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

export default PermintaanMaterial;
