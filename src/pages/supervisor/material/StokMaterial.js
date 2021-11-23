import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Image, Modal, Row, Table, Button } from 'react-bootstrap';
import axios from "axios";
import {Bars} from '@agney/react-loading';

const StokMaterial = (props) => {
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [stokMaterial, setStokMaterial] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/materials")
      .then((res) => {
        setStokMaterial(res.data);
        setLoading(true); 
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            Material Sisa
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
            <div className="d-flex mt-3 justify-content-center">
              <Button as="input" type="submit" value="Kirim" className="button-submit-prosuksi"/>
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
              <h3>Material Sisa</h3>
            </Col>
          </Row>
          <div style={{marginTop:'2%'}}>
            <Table striped bordered hover>
              <thead>
                <tr style={{textAlign:'center'}}>
                  <th width="50">#</th>
                  <th width="250">Material</th>
                  <th width="180">Tipe</th>
                  <th width="100">Stok</th>
                  <th width="100">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{textAlign:'center'}}>1</td>
                  <td>Denim</td>
                  <td>Kain</td>
                  <td style={{textAlign:'center'}}>150</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowUpdate(true)}/>
                      <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi" onClick={() => setLgShowDell(true)}/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign:'center'}}>2</td>
                  <td>Katun</td>
                  <td>Kain</td>
                  <td style={{textAlign:'center'}}>2000</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <text style={{fontStyle:'italic', color:'#2479F9'}}>Dalam Proses</text>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign:'center'}}>3</td>
                  <td>Kancing</td>
                  <td>Pernik</td>
                  <td style={{textAlign:'center'}}>4350</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <text style={{fontStyle:'italic', color:'#2479F9'}}>Dalam Proses</text>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign:'center'}}>4</td>
                  <td>Resleting</td>
                  <td>Pernik</td>
                  <td style={{textAlign:'center'}}>2000</td>
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
            <h3>Riwayat Material Sisa</h3>
            <div style={{marginTop:'5%'}}>
              <Table striped bordered hover>
                <thead>
                  <tr style={{textAlign:'center'}}>
                    <th width="50">#</th>
                    <th width="250">Material</th>
                    <th width="180">Tipe</th>
                    <th width="100">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? stokMaterial.map((material, index) => {
                    return (
                      <tr key={material.id}>
                        <td style={{textAlign:'center'}}>{index + 1}</td>
                        <td>{material.name}</td>
                        <td>{material.types.name}</td>
                        <td style={{textAlign:'center'}}>{material.stock}</td>
                      </tr>
                    );
                  }):
                  <div>
                    <Bars width="50" color="#2f89e4" style={{marginLeft:'535%', marginTop:'20px'}}/>
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

export default StokMaterial;
