import React, { useState } from 'react';
import { Col, Container, Image, Modal, Row, Table } from 'react-bootstrap';

const DataProduk = () => {
  const [lgShowDetail, setLgShowDetail] = useState(false);

  return (
    <div className="marginBody" style={{paddingBottom:'20px'}}>

      <Modal
        size="lg"
        show={lgShowDetail}
        onHide={() => setLgShowDetail(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Detail Produk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Row>
            <Col sm='5'>
              <div>
                <div className="d-flex pb-3 justify-content-center">
                  <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
                <div style={{textAlign:'center'}}>
                  <h4>Tas</h4> 
                  <p>Kategori Produk</p>
                  <div className="d-flex pb-3 justify-content-center">
                    <Container  style={{backgroundColor:'rgb(201, 197, 197)', marginLeft:'20px', padding:'5px', borderRadius:'10px'}}>
                      Aksesoris
                    </Container>
                    <Container  style={{backgroundColor:'rgb(201, 197, 197)', marginLeft:'10px', padding:'5px', borderRadius:'10px'}}>
                      Gaya Hidup
                    </Container>
                  </div>
                  <text style={{}}>Biaya Produksi Satuan</text>
                  <h5>Rp. <text>200.000.000</text></h5>
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

      <Row>
        <Col>
          <h3>Produk</h3>
        </Col>
      </Row>

      <div className="shadow-sm p-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <h3>Data Produk</h3>
            <Row>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
              <Col sm='3'>
                <div class="shadow-sm m-3 bg-body rounded" style={{cursor:'pointer'}} onClick={() => setLgShowDetail(true)}>
                  <div className="d-flex justify-content-center">
                    <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </Col>
            </Row>
          </Container>  
        </div>
    </div>
  );
};

export default DataProduk;