import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Image, Row, Table } from 'react-bootstrap';

const PermintaanMaterial = () => {
  return (
    <div className="marginAll">
      <h1>Material</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingBottom:'20px'}}>
            <h3>Permintaan Material</h3>
            <Row style={{marginTop:'2%'}}>
              <Col sm={3}>
                <div className="d-flex justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div style={{marginTop:"20px", textAlign:"center"}}>
                    <p>Total Biaya</p>
                    <h5>Rp. <text>200.000.000</text></h5>
                  </div>
                </div>
              </Col>
              <Col sm={9}>
                <Row style={{marginTop:'20px'}}>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                      Pilih Produk
                    </Form.Label>
                    <Col sm="4">
                      <Form.Select defaultValue="Pilih Produk...">
                        <option>Pilih Produk...</option>
                        <option>Tas</option>
                        <option>Sepatu</option>
                        <option>Baju</option>
                      </Form.Select>
                    </Col>
                    <Form.Label column sm="">
                      Harga Satuan
                    </Form.Label>
                    <Col sm="" style={{marginTop:'7px'}}>
                      <text>Rp. <text>200.000</text></text>
                    </Col>
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                    <Form.Label column sm="3">
                      Jumlah
                    </Form.Label>
                    <Col sm="4">
                      <Form.Control type="number" placeholder="..." />
                    </Col>
                    <Form.Label column sm="">
                      Satuan
                    </Form.Label>
                    <Col sm="3">
                      <Form.Select defaultValue="Pilih Satuan...">
                        <option>Pilih Satuan...</option>
                        <option>Meter</option>
                        <option>Pcs</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                    <Form.Label column sm="3">
                      Deskripsi
                    </Form.Label>
                    <Col>
                      <FloatingLabel controlId="CommentDeskripsi">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: '200px' }}
                        />
                      </FloatingLabel>
                    </Col>
                  </Form.Group>
                  <Col>
                    <div className="d-flex justify-content-end" style={{marginRight:"4%"}}>
                      <Button as="input" type="submit" value="Buat Permintaan" className="button-submit-prosuksi"/>
                      <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi"/>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>  
        </div>
    </div>
  );
};

export default PermintaanMaterial;
