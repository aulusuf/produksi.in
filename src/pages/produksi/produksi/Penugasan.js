import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import "../styles/produksi.css";
import { MDBDataTable } from "mdbreact";

const Penugasan = () => {
  const [lgShow, setLgShow] = useState(false);
  const [LgShowProfil, setLgShowProfil] = useState(false);
  const [LgShowPegawaiEdit, setLgShowPegawaiEdit] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Surname",
        field: "surname",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
      {
        label: "Extn.",
        field: "extn",
        sort: "asc",
        width: 100,
      },
      {
        label: "E-mail",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        name: "Tiger",
        surname: "Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320,800",
        extn: 5421,
        email: "t.nixon@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Garrett",
        surname: "Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170,750",
        extn: 8422,
        email: "q.winters@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Ashton",
        surname: "Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86,000",
        extn: 1562,
        email: "a.cox@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-produksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
        action: (
          <div className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Lihat"
              className="button-submit-prosuksi"
              onClick={() => setLgShowProfil(true)}
            />
            <Button
              as="input"
              type="submit"
              value="Ubah"
              className="button-edit-produk"
              onClick={() => setLgShowPegawaiEdit(true)}
            />
          </div>
        ),
      },
    ],
  };
  return (
    <div className="marginBody">
      <h1>Produksi</h1>
      <Row className="my-4">
        <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <h3>Penugasan</h3>
            <div style={{ marginTop: "5%" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          as="input"
                          type="submit"
                          value="Kirim"
                          className="button-submit-prosuksi"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>@fat</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          size="lg"
                          disabled
                          className="button-selesai-material"
                        >
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>@fat</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          size="lg"
                          disabled
                          className="button-selesai-material"
                        >
                          Selesai
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>@fat</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          size="lg"
                          disabled
                          className="button-selesai-material"
                        >
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
      </Row>
      <Row className="my-4">
      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <h3>Riwayat Penugasan</h3>
            <div style={{ marginTop: "5%" }}>
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
        {/* <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <div style={{ marginTop: "2%" }}>
              <MDBDataTable scrollX striped bordered data={data} />
            </div>
          </Container>
        </div> */}
      </Row>
    </div>
  );
};
export default Penugasan;
