import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import UserTableData from "./UserTableData";

export default function UserTable(props) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUserData(res.data);
      // console.log(res.data);
    });
  }, []);
  // console.log(userData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Role</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => {
          return (
            <UserTableData key={user.id} data={user}>
              <div className="d-flex justify-content-center">
                <Button
                  as="input"
                  variant="primary"
                  value="Lihat"
                  type="button"
                  className="me-3"
                  onClick={props.lihat}
                />
                <Button
                  as="input"
                  variant="warning"
                  value="Ubah"
                  type="button"
                  onClick={props.ubah}
                />
              </div>
            </UserTableData>
          );
        })}
      </tbody>
    </Table>
  );
}
