import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image, Table, Modal, Form, Button } from 'react-bootstrap';
import "./styles/all.css";
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import {Bars} from '@agney/react-loading';
import axios from 'axios';

const Dashboard = () => {
  let history = useHistory()
  
  const [LgShowProfil, setLgShowProfil] = useState(false);
  const [LgShowProfilEdit, setLgShowProfilEdit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productAssignmentData, setproductAssignmentData] = useState([]);
  const [userData, setUserData] = useState({});
  
  const userName = localStorage.getItem("name");
  const userRole = localStorage.getItem("roleName");

  useEffect(() => {
    axios.get("/api/product_assignments").then((res) => {
      setproductAssignmentData(res.data);
      setLoading(true); 
    });
  }, []);

  const getUserData = () => {
    const params = localStorage.getItem("id");
    console.log(params);
    axios
      .get("/api/user/" + params)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="marginBody">
      <Modal
        size=""
        show={LgShowProfil}
        onHide={() => setLgShowProfil(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Profil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Row style={{marginTop:'2%'}}>
            <Col sm={4}>
              <div className="d-flex justify-content-center">
                <Image className="image-dashboard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
              </div>
            </Col>
            <Col sm={8}>
                {/* PROFILE CONTENT */}
                <Row className="mb-2">
                  <Col sm="3">Nama</Col>
                  <Col>{userData.name}</Col>
                  {/* <Col>Farhan Ismail</Col> */}
                </Row>
                <Row className="mb-2">
                  <Col sm="3">Email</Col>
                  <Col>{userData.email}</Col>
                </Row>
                <Row className="mb-2">
                  <Col sm="3">Jabatan</Col>
                  <Col>
                    <strong>{userRole}</strong>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col sm="3">Username</Col>
                  <Col>{userData.username}</Col>
                </Row>
              </Col>
            <Col>
              <div className="d-flex justify-content-center">
                <Button onClick={()=>setLgShowProfilEdit(true)} as="input" type="submit" value="Ubah" className="button-edit-produk" style={{paddingLeft:'20px', paddingRight:'20px'}}/>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowProfilEdit}
        onHide={() => setLgShowProfilEdit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Ubah Profil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Row style={{marginTop:'2%'}}>
            <Col sm={3}>
              <div className="d-flex justify-content-center">
                <div >
                <div>
                  {selectedImage && (
                    <div class="shadow-sm bg-body rounded">
                      <img alt="" width={"100px"} height={"100px"} src={URL.createObjectURL(selectedImage)} />
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
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control type="email" placeholder="Email..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Jabatan
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Jabatan..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Username
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Username..." />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Password
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Password..." />
                  </Col>
                </Form.Group>
              </Row>
            </Col>
            <Col>
              <div className="d-flex mt-2 justify-content-center">
                <Button as="input" type="submit" value="Selesai" className="button-submit-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px'}} onClick={() => setLgShowProfilEdit(false)}/>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Row>
        <Col sm='6'>
          <div className="cursor">
            <div class="shadow-sm p-3 mt-3 bg-body rounded">
              <Container className="padding-profil" onClick={() => setLgShowProfil(true)}>
                <Row>
                  <Col sm={3}>
                    <div className="d-flex justify-content-center">
                        <Image className="image-profil" src="data:image/jpeg;base64,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" roundedCircle />
                    </div>
                  </Col>
                  <Col sm={9}>
                    <div style={{textAlign:"center", paddingTop:'10px'}}>
                      <h3>Hallo <text>{userName}</text></h3>
                      <text style={{fontSize:'21px'}}>{userRole}</text>
                    </div>
                  </Col>
                </Row>
              </Container>  
            </div>
          </div>

          <div class="shadow-sm p-3 mt-3 bg-body rounded">
            <Container style={{ paddingBottom:'30px'}}>
            <h3>Statistik</h3>
              <Row className="padding-statistik">
                <Col sm='6'>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <BiIcons.BiGroup style={{fontSize:'50px', color:'#FFCA42'}}/>
                    </Col>
                    <Col style={{textAlign:'center'}}>
                      <text style={{fontSize:'20px'}}><strong>300</strong></text>
                      <Col>
                        <text style={{fontSize:'10px', color:'grey'}}>Pegawai</text>
                      </Col>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="d-flex pb-3 justify-content-center">
                      <FaIcons.FaWarehouse style={{fontSize:'48px', color:'#4642FF'}}/>
                    </Col>
                    <Col style={{textAlign:'center'}}>
                      <text style={{fontSize:'20px'}}><strong>30</strong></text>
                      <Col>
                        <text style={{fontSize:'10px', color:'grey'}}>Produk</text>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="padding-statistik">
                <Col>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <BsIcons.BsInboxesFill style={{fontSize:'45px', color:'#FF4D42'}}/>
                    </Col>
                    <Col style={{textAlign:'center'}}>
                      <text style={{fontSize:'20px'}}><strong>4</strong></text>
                      <Col>
                        <text style={{fontSize:'10px', color:'grey'}}>Kategori</text>
                      </Col>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="d-flex mb-2 justify-content-center">
                      <MdIcons.MdSell style={{fontSize:'50px', color:'#B742FF'}}/>
                    </Col>
                    <Col style={{textAlign:'center'}}>
                      <text style={{fontSize:'20px'}}><strong>323k</strong></text>
                      <Col>
                        <text style={{fontSize:'10px', color:'grey'}}>Total Produksi</text>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>  
          </div>
        </Col>
        <Col sm='6'>
          <div class="shadow-sm p-3 mt-3 bg-body rounded">
              <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
                  <h3>Permintaan Produksi</h3>
                  <Table striped bordered hover>
                  <thead style={{textAlign:'center'}}>
                      <tr>
                        <th>#</th>
                        <th>Produk</th>
                        <th>Kategori</th>
                        <th>Jumlah</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{textAlign:'center'}}>1</td>
                      <td>Tas sandang</td>
                      <td>Tas</td>
                      <td style={{textAlign:'center'}}>200</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'center'}}>2</td>
                      <td>Jaket</td>
                      <td>Atasan</td>
                      <td style={{textAlign:'center'}}>352</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'center'}}>3</td>
                      <td>Sandal</td>
                      <td>Alas Kaki</td>
                      <td style={{textAlign:'center'}}>500</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:'center'}}>4</td>
                      <td>Kemeja</td>
                      <td>Atasan</td>
                      <td style={{textAlign:'center'}}>10</td>
                    </tr>
                  </tbody>
                  </Table>
              </Container> 
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div class="mt-3 rounded">
            <div className="button-dashboard"  onClick={() => history.push(`/supervisor/produksi`)}>
              <h3 style={{textAlign:'center', fontSize:'22px'}}>Permintaan Produksi</h3>
            </div>
            <div className="button-dashboard" onClick={() => history.push(`/supervisor/material`)}>
              <h3 style={{textAlign:'center', fontSize:'22px'}}>Permintaan Material</h3>
            </div>
          </div>
        </Col>
        <Col>
          <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container>
                <h3>Produk</h3>
                <Row className="d-flex justify-content-center">
                  <Col sm='5'>
                    <div class="shadow-sm bg-body rounded">
                      <div className="d-flex justify-content-center">
                        <Image style={{height:'135px', width:'140px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                      </div>
                      <p style={{textAlign:'center'}}>Tas Punggung</p>
                    </div>
                  </Col>
                  <Col sm='5'>
                    <div class="shadow-sm bg-body rounded">
                      <div className="d-flex justify-content-center">
                        <Image style={{height:'135px', width:'140px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                      </div>
                      <p style={{textAlign:'center'}}>Tas Jinjing</p>
                    </div>
                  </Col>
                </Row>
                
                <Col className="cursor" onClick={() => history.push(`/manajemen/produk/data-produk`)}>
                  <div className="d-flex justify-content-center">
                    <text style={{textAlign:'center'}}>Lihat Semua</text>
                  </div>
                </Col>
              </Container>
          </div>
        </Col>
      </Row>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Riwayat Produksi</h3>
          <div style={{ marginTop: "5%" }}>
            <Table striped bordered hover style={{textAlign:'center'}}>
              <thead>
                <tr>
                  <th width="50">#</th>
                  <th width="300">Produk</th>
                  <th width="120">Jumlah</th>
                  <th width="150">Biaya</th>
                  <th width="180">Tim Produksi</th>
                </tr>
              </thead>
              <tbody>
                {loading ? productAssignmentData.map((paData, index) => {
                  return (
                    <tr key={paData.id}>
                      <td>{index + 1}</td>
                      <td style={{textAlign:'start'}}>{paData.products.name}</td>
                      <td>{paData.amount}</td>
                      <td>{paData.cost}</td>
                      <td>{paData.assignmentId}</td>
                      {/* // untuk if else status */}
                    </tr>
                  );
                }):
                <div>
                  <Bars width="50" color="#2f89e4" style={{marginLeft:'350%', marginTop:'20px'}}/>
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

export default Dashboard;
