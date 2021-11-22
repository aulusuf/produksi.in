import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Image, Row, Button } from 'react-bootstrap';

const TambahProduk = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return(
    <div className="marginBody">
      <h1>Produk</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingBottom:'20px'}}>
          <h3>Tambah Produk</h3>
          <Row style={{marginTop:'2%'}}>
              <Col sm={3}>
                <div className="d-flex justify-content-center">
                  <div >
                  <div>
                    {selectedImage && (
                      <div  class="shadow-sm bg-body rounded">
                        <img alt="" width={"100px"} height={"100px"} src={URL.createObjectURL(selectedImage)} />
                      </div>
                    )}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center" style={{marginTop:'20px'}}>
                  <input
                    type="file"
                    onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                    }}
                  />
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
                    <Row>
                      <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                        <Form.Label column sm="3">
                          Nama
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="..." />
                        </Col>
                      </Form.Group>
                    </Row>

                    <Row>
                      <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                        <Form.Label column sm="3">
                          Kategori Produk
                        </Form.Label>
                        <Col sm="4">
                          <Form.Select defaultValue="Pilih Kategori..." style={{cursor:'pointer'}}>
                            <option>Pilih Kategori...</option>
                            <option>Aksesoris</option>
                            <option>Tas</option>
                            <option>Atasan</option>
                            <option>Bawahan</option>
                            <option>Alas Kaki</option>
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
                    </Row>
                  </Form.Group>
                </Row>
              </Col>

              <div style={{textAlign:'center'}}>
                <h3>Material</h3>
                <p>Data Material yang digunakan untuk produksi</p>
              </div>
            </Row>

            <Row>
              <Col sm='3'>
                <div className="d-flex mt-2 justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="mt-4 m-2">
                  <Form.Select defaultValue="Pilih Material..." style={{cursor:'pointer'}}>
                    <option>Material...</option>
                    <option>Resleting</option>
                    <option>Benang</option>
                    <option>Denim</option>
                    <option>Pengait</option>
                    <option>Kulit</option>
                    <option>Kancing</option>
                    <option>Lem</option>
                    <option>Katun</option>
                    <option>Karet</option>
                    <option>Sol</option>
                  </Form.Select>
                  <Form.Control className="mt-3" type="number" placeholder="Jumlah..." />
                </div>
              </Col>
              <Col sm='3'>
                <div className="d-flex mt-2 justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="mt-4 m-2">
                  <Form.Select defaultValue="Pilih Produk..." style={{cursor:'pointer'}}>
                    <option>Material...</option>
                    <option>Resleting</option>
                    <option>Benang</option>
                    <option>Denim</option>
                    <option>Pengait</option>
                    <option>Kulit</option>
                    <option>Kancing</option>
                    <option>Lem</option>
                    <option>Katun</option>
                    <option>Karet</option>
                    <option>Sol</option>
                  </Form.Select>
                  <Form.Control className="mt-3" type="number" placeholder="Jumlah..." />
                </div>
              </Col>
              <Col sm='3'>
                <div className="d-flex mt-2 justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="mt-4 m-2">
                  <Form.Select defaultValue="Pilih Produk..." style={{cursor:'pointer'}}>
                    <option>Material...</option>
                    <option>Resleting</option>
                    <option>Benang</option>
                    <option>Denim</option>
                    <option>Pengait</option>
                    <option>Kulit</option>
                    <option>Kancing</option>
                    <option>Lem</option>
                    <option>Katun</option>
                    <option>Karet</option>
                    <option>Sol</option>
                  </Form.Select>
                  <Form.Control className="mt-3" type="number" placeholder="Jumlah..." />
                </div>
              </Col>
              <Col sm='3'>
                <div className="d-flex mt-2 justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="mt-4 m-2">
                  <Form.Select defaultValue="Pilih Produk..." style={{cursor:'pointer'}}>
                    <option>Material...</option>
                    <option>Resleting</option>
                    <option>Benang</option>
                    <option>Denim</option>
                    <option>Pengait</option>
                    <option>Kulit</option>
                    <option>Kancing</option>
                    <option>Lem</option>
                    <option>Katun</option>
                    <option>Karet</option>
                    <option>Sol</option>
                  </Form.Select>
                  <Form.Control className="mt-3" type="number" placeholder="Jumlah..." />
                </div>
              </Col>
              <Col sm='3'>
                <div className="d-flex mt-3 justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="mt-4 m-2">
                  <Form.Select defaultValue="Pilih Produk..." style={{cursor:'pointer'}}>
                    <option>Material...</option>
                    <option>Resleting</option>
                    <option>Benang</option>
                    <option>Denim</option>
                    <option>Pengait</option>
                    <option>Kulit</option>
                    <option>Kancing</option>
                    <option>Lem</option>
                    <option>Katun</option>
                    <option>Karet</option>
                    <option>Sol</option>
                  </Form.Select>
                  <Form.Control className="mt-3" type="number" placeholder="Jumlah..." />
                </div>
              </Col>
              <Col sm='3'>
                <div className="d-flex mt-3 justify-content-center">
                  <div class="shadow-sm bg-body rounded">
                    <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  </div>
                </div>
                <div className="mt-4 m-2">
                  <Form.Select defaultValue="Pilih Produk..." style={{cursor:'pointer'}}>
                    <option>Material...</option>
                    <option>Resleting</option>
                    <option>Benang</option>
                    <option>Denim</option>
                    <option>Pengait</option>
                    <option>Kulit</option>
                    <option>Kancing</option>
                    <option>Lem</option>
                    <option>Katun</option>
                    <option>Karet</option>
                    <option>Sol</option>
                  </Form.Select>
                  <Form.Control className="mt-3" type="number" placeholder="Jumlah..." />
                </div>
              </Col>   
            </Row>
            <Col>
              <div className="d-flex mt-4 justify-content-center">
                <Button as="input" type="submit" value="Tamba Produk" className="button-submit-prosuksi"/>
                <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi" onClick={()=>setSelectedImage(null)}/>
              </div>
            </Col>
        </Container>  
      </div>
    </div>
  )
};

export default TambahProduk;
