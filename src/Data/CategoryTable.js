import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import CategoryTableData from "./CategoryTableData";
import {Bars} from '@agney/react-loading';

export default function CategoryTable(props) {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategoryData(res.data);
      setLoading(true); 
      // console.log(res.data);
    });
  }, []);
  // console.log(userData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr style={{textAlign:'center'}}>
          <th width="50">#</th>
          <th width="450">Kategori</th>
          <th width="150">Action</th>
        </tr>
      </thead>
      <tbody>
        {loading ? categoryData.map((category) => {
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
        }):
        <div>
          <Bars width="50" color="#2f89e4" style={{marginLeft:'600%', marginTop:'20px'}}/>
        </div>}
      </tbody>
    </Table>
  );
}
