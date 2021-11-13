import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import "../styles/produksi.css";

const BuatPermintaan = () => {
  return (
    <div className="marginAll">
      <h1>Produksi</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <h3>Penugasan</h3>
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
                        <Button as="input" type="submit" value="Kirim" className="button-submit-prosuksi"/>
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
                        <Button variant="primary" size="lg" disabled className="button-selesai-material">
                          Selesai
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
                        <Button variant="primary" size="lg" disabled className="button-selesai-material">
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button variant="primary" size="lg" disabled className="button-selesai-material">
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>  
        </div>
    </div>
  );
};

export default BuatPenugasan;