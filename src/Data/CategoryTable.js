import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import CategoryTableData from "./CategoryTableData";

export default function UserTable(props) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategoryData(res.data);
      // console.log(res.data);
    });
  }, []);
  // console.log(userData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Kategori</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {categoryData.map((category) => {
          return (
            <CategoryTableData key={category.id} data={category}>
              <div className="d-flex justify-content-center">
                <Button
                  as="input"
                  type="submit"
                  value="Ubah"
                  className="button-edit-produk"
                  onClick={props.update}
                />
                <Button
                  as="input"
                  type="submit"
                  value="Hapus"
                  className="button-cencel-prosuksi"
                  onClick={props.delete}
                />
              </div>
            </CategoryTableData>
          );
        })}
      </tbody>
    </Table>
  );
}
