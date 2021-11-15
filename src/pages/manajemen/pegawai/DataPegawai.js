import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';

const DataPegawai = () => {
  const [lgShow, setLgShow] = useState(false);
  const [LgShowProfil, setLgShowProfil] = useState(false);
  const [LgShowPegawaiEdit, setLgShowPegawaiEdit] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Surname',
        field: 'surname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Extn.',
        field: 'extn',
        sort: 'asc',
        width: 100
      },
      {
        label: "E-mail",
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: "Action",
        field: 'action',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        name: 'Tiger',
        surname: 'Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320,800',
        extn: 5421,
        email: 't.nixon@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Garrett',
        surname: 'Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170,750',
        extn: 8422,
        email: 'q.winters@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Ashton',
        surname: 'Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86,000',
        extn: 1562,
        email: 'a.cox@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net',
        action: 
          <div className="d-flex justify-content-center">
            <Button as="input" type="submit" value="Lihat" className="button-submit-prosuksi" onClick={() => setLgShowProfil(true)}/>
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk" onClick={() => setLgShowPegawaiEdit(true)}/>
          </div>
      }
    ]
  };

  return (
    <div className="marginAll">

      <Modal
        size=""
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Pegawai Baru
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
                  <Form.Group as={Row} className="mb-2" controlId="formNama">
                    <Form.Label column sm="3">
                      Nama
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Nama..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-2" controlId="formEmail">
                    <Form.Label column sm="3">
                      Email
                    </Form.Label>
                    <Col>
                      <Form.Control type="email" placeholder="Email..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-2" controlId="formJabatan">
                    <Form.Label column sm="3">
                      Jabatan
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Jabatan..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-2" controlId="formUsername">
                    <Form.Label column sm="3">
                      Username
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Username..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-4" controlId="formPassword">
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
                <div className="d-flex justify-content-center">
                  <Button as="input" type="submit" value="Tambah Pegawai" className="button-submit-prosuksi"/>
                  <Button  onClick={()=>setSelectedImage(null)} as="input" type="submit" value="Batal" className="button-cencel-prosuksi"/>
                </div>
              </Col>
            </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowProfil}
        onHide={() => setLgShowProfil(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Detail Pegawai
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row style={{marginTop:'2%'}}>
          <Col sm={4}>
            <div className="d-flex justify-content-center">
                <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
              </div>
            </Col>
            <Col sm={8}>
              <Row className="mb-2">
                <Col sm="3">
                  Nama
                </Col>
                <Col>
                  Farhan Ismail
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">
                  Email
                </Col>
                <Col>
                  farhanismail@mail.com
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">
                  Jabatan
                </Col>
                <Col>
                  <strong>Manajemen</strong>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm="3">
                  Username
                </Col>
                <Col>
                  Hannn
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="d-flex justify-content-center">
                <Button onClick={()=>setLgShowPegawaiEdit(true)} as="input" type="submit" value="Edit" className="button-edit-produk" style={{paddingLeft:'20px', paddingRight:'20px'}}/>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowPegawaiEdit}
        onHide={() => setLgShowPegawaiEdit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-ubah-pegawai">
            Ubah Data Pegawai
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
                  <Form.Group as={Row} className="mb-2" controlId="formNama">
                    <Form.Label column sm="3">
                      Nama
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Nama..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-2" controlId="formEmail">
                    <Form.Label column sm="3">
                      Email
                    </Form.Label>
                    <Col>
                      <Form.Control type="email" placeholder="Email..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-2" controlId="formJabatan">
                    <Form.Label column sm="3">
                      Jabatan
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Jabatan..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-2" controlId="formUsername">
                    <Form.Label column sm="3">
                      Username
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="Username..." />
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-4" controlId="formPassword">
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
                <div className="d-flex justify-content-center">
                  <Button as="input" type="submit" value="Ubah" className="button-submit-prosuksi"/>
                  <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" onClick={()=>setLgShowDell(true)}/>
                </div>
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
          <Modal.Title id="modal-hapus-pegawai">
            Hapus Data ini ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi" style={{paddingLeft:'20px', paddingRight:'20px'}} onClick={() => setLgShowDell(false)}/>
          </div>
        </Modal.Body>
      </Modal>


      <h1>Pegawai</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <Row>
              <Col>
                <h3>Data Pegawai</h3>
              </Col>
              <Col>
                <div className="d-flex justify-content-end">
                  <Button as="input" type="submit" value="Tambah" className="button-submit-prosuksi" onClick={()=>setLgShow(true)}/>
                </div>
              </Col>
            </Row>
            <div style={{marginTop:'2%'}}>
              <MDBDataTable
                scrollX
                striped
                bordered
                data={data}
              />
            </div>
          </Container>  
        </div>
    </div>
  );
};

export default DataPegawai;