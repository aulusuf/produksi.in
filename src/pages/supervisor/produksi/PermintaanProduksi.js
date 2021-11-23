import React, { useEffect, useState } from 'react';
import { Container, Modal, Table, Button } from 'react-bootstrap';
import "../styles/produksi.css";
import {Bars} from '@agney/react-loading';
import axios from 'axios';

const BuatPermintaan = () => {
  const [lgShowDone, setlgShowDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productAssignmentData, setproductAssignmentData] = useState([]);

  useEffect(() => {
    axios.get("/api/product_assignments").then((res) => {
      setproductAssignmentData(res.data);
      setLoading(true); 
    });
  }, []);

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
              <Table striped bordered hover style={{textAlign:'center'}}>
                <thead>
                  <tr>
                    <th width="50">#</th>
                    <th width="300">Produk</th>
                    <th width="120">Jumlah</th>
                    <th width="150">Biaya</th>
                    <th width="180">Tim Produksi</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tas Punggung</td>
                    <td>200</td>
                    <td>200000</td>
                    <td>3</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button as="input" type="submit" value="Terima" className="button-submit-prosuksi"/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Tas Punggung</td>
                    <td>200</td>
                    <td>200000</td>
                    <td>3</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button className="button-selesai-material" onClick={() => setlgShowDone(true)}>
                          Selesaikan
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Tas Punggung</td>
                    <td>200</td>
                    <td>200000</td>
                    <td>3</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button className="button-selesai-material" onClick={() => setlgShowDone(true)}>
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
                    <Bars width="50" color="#2f89e4" style={{marginLeft:'750%', marginTop:'20px'}}/>
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

export default BuatPermintaan;
