import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function StockMaterialTable(props) {
  const [stokProduct, setStokProduct] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setStokProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(userData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Produk</th>
          <th>Kategori</th>
          <th>Stok</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stokProduct.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.categories.name}</td>
              <td>{product.stock}</td>
              <td>{props.children}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
