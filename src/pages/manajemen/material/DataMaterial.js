import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Image, Modal, Row} from 'react-bootstrap';

const DataMaterial = () => {
  const [lgShow, setLgShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <div className="marginAll" style={{paddingTop:'20px', paddingBottom:'20px'}}>

      <Modal
        size=""
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Material Baru
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
                  <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                    <Form.Label column sm="3">
                      Nama
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Nama..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                      Tipe
                    </Form.Label>
                    <Col sm='6'>
                      <Form.Select defaultValue="Pilih Produk...">
                        <option>Pilih Tipe...</option>
                        <option>Tipe1</option>
                        <option>Tipe2</option>
                        <option>Tipe3</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                    <Form.Label column sm="3">
                      Harga
                    </Form.Label>
                    <Col>
                      <Form.Control type="number" placeholder="..." />
                    </Col>
                  </Form.Group>
                </Row>
              </Col>
              <Col>
                <div className="d-flex justify-content-end" style={{marginRight:"4%"}}>
                  <Button as="input" type="submit" value="Tambah Material" className="button-submit-prosuksi"/>
                  <Button onClick={()=>setSelectedImage(null)} as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" style={{marginRight:'2%'}}/>
                </div>
              </Col>
            </Row>
        </Modal.Body>
      </Modal>

      <Row>
        <Col>
          <h3>Material</h3>
        </Col>
        <Col>
          <div className="d-flex justify-content-end" style={{marginRight:'7%'}}>
            <Button as="input" type="submit" value="Tambah Material" className="button-submit-prosuksi" onClick={() => setLgShow(true)}/>
          </div>
        </Col>
      </Row>

      <div class="shadow-sm p-3 bg-body rounded">
        <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
          <h3>Data Material</h3>
          <Row>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
              <div className="d-flex justify-content-center">
                <div class="shadow-sm m-2 bg-body rounded">
                  <Image style={{height:'170px', width:'170px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                  <p style={{textAlign:'center'}}>Tas</p>
                </div>
              </div>
            </Col>
            <Col sm='3' style={{cursor:'pointer'}}>
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

export default DataMaterial;
