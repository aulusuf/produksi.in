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
        <tr style={{textAlign:'center'}}>
          <th width="50">#</th>
          <th width="250">Produk</th>
          <th width="180">Kategori</th>
          <th width="100">Stok</th>
          <th width="100">Action</th>
        </tr>
      </thead>
      <tbody>
        {stokProduct.map((product) => {
          return (
            <tr key={product.id}>
              <td style={{textAlign:'center'}}>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.categories.name}</td>
              <td style={{textAlign:'center'}}>{product.stock}</td>
              <td className="d-flex justify-content-center">{props.children}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
