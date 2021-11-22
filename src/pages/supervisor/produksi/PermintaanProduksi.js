import React, { useState } from 'react';
import { Container, Modal, Table, Button } from 'react-bootstrap';
import "../styles/produksi.css";

const BuatPermintaan = () => {
  const [lgShowDone, setlgShowDone] = useState(false);

  return (
    <div className="marginBody">

      <Modal
        size="sm"
        show={lgShowDone}
        onHide={() => setlgShowDone(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk" className="d-flex justify-content-center">
            <strong style={{fontSize:"20px"}}>Perhatian</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{textAlign:'center', marginBottom:'20px'}}>Yakin ingin menyelesaikannya?</div>
          <div className="d-flex mt-2 mb-2 justify-content-center">
            <Button variant="primary" size="lg" className="button-selesai-material" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              Selesaikan
            </Button>
            <Button as="input" type="submit" value="Batalkan" className="button-cencel-prosuksi" style={{paddingLeft:'10px', paddingRight:'10px'}} onClick={() => setlgShowDone(false)}/>
          </div>
        </Modal.Body>
      </Modal>
      <h1>Produksi</h1>

        <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <h3>Permintaan</h3>
            <div style={{marginTop:'5%'}}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button as="input" type="submit" value="Terima" className="button-submit-prosuksi"/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button variant="primary" size="lg" className="button-selesai-material" onClick={() => setlgShowDone(true)}>
                          Selesaikan
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button variant="primary" size="lg" className="button-selesai-material" onClick={() => setlgShowDone(true)}>
                          Selesaikan
                        </Button>
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
            <h3>Riwayat</h3>
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

export default BuatPermintaan;
