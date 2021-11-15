import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Image, Modal, Row, Table } from 'react-bootstrap';

const DataProduk = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="marginAll">

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Detail Produk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm='5'>
              <div>
                <div className="d-flex justify-content-center">
                  <Image style={{height:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
                <div style={{textAlign:'center'}}>
                  <h4>Tas</h4>
                  <p>Kategori Produk</p>
                  <div className="d-flex justify-content-center">
                    <Container  style={{backgroundColor:'rgb(201, 197, 197)', marginLeft:'20px', padding:'5px', borderRadius:'10px'}}>
                      Aksesoris
                    </Container>
                    <Container  style={{backgroundColor:'rgb(201, 197, 197)', marginLeft:'10px',  padding:'5px', borderRadius:'10px'}}>
                      Gaya Hidup
                    </Container>
                  </div>
                  <text>Biaya Produksi Satuan</text>
                  <h5>Rp. <text>200.000.000</text></h5>
                  <div className="d-flex justify-content-center">
                    <Button as="input" type="submit" value="Ubah Produk" className="button-edit-produk"/>
                    <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <h5>Material</h5>
                <text>Data Material yang digunakan</text>
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
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <h1>Produksi</h1>

      <div class="shadow-sm p-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <h3>Data Produk</h3>
            <Row>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
              <Col sm='3' style={{cursor:'pointer'}} onClick={() => setLgShow(true)}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm m-2 bg-body rounded">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    <p style={{textAlign:'center'}}>Tas</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>  
        </div>
    </div>
  );
};

export default DataProduk;
