import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Kategori = () => {
  return (
    <div className="marginAll">
      <h1>Kategori</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <Row>
              <Col>
                <h3>Data Kategori</h3>
              </Col>
              <Col>
                <div className="d-flex justify-content-end">
                  <Button as="input" type="submit" value="Tambah" className="button-submit-prosuksi"/>
                </div>
              </Col>
            </Row>
            <div style={{marginTop:'2%'}}>
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
                        <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
                        <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
                        <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
                        <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
                        <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
                        <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
                        <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
                        <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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

export default Kategori;
