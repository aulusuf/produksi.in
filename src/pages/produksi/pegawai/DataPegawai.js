import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';

const DataPegawai = () => {
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
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
            <Button as="input" type="submit" value="Ubah" className="button-edit-produk"/>
            <Button as="input" type="submit" value="Hapus" className="button-cencel-prosuksi"/>
          </div>
      }
    ]
  };

  return (
    <div className="marginAll">
      <h1>Pegawai</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <Row>
              <Col>
                <h3>Data Pegawai</h3>
              </Col>
              <Col>
                <div className="d-flex justify-content-end">
                  <Button as="input" type="submit" value="Tambah" className="button-submit-prosuksi"/>
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