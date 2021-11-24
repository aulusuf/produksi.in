import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Modal, Row, Table } from 'react-bootstrap';
import LoadingData from '../../../Components/LoadingProduct';

const DataProduk = () => {
  const [lgShowDetail, setLgShowDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [productCost, setProductCost] = useState([]);
  const [materialList, setMaterialList] = useState([]);
  const [productName, setProductName] = useState([]);

  const handleModalDetail = (props) => {
    setLgShowDetail(true);
    setProductName(props.name);
    setProductCategory(props);
    setProductCost(props.cost);
    console.log(props);
    console.log(materialList);
    // renderMaterialList(props);
  };

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProductData(res.data);
        setLoading(true); 
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="marginBody" style={{paddingBottom:'20px'}}>

      <Modal
        size="lg"
        show={lgShowDetail}
        onHide={() => setLgShowDetail(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Detail Produk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Row>
            <Col sm='5'>
              <div>
                <div className="d-flex pb-3 justify-content-center">
                  <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                </div>
                <div style={{textAlign:'center'}}>
                <h4>{productName}</h4> 
                  <p>Kategori Produk</p>
                  <div className="d-flex pb-3 justify-content-center">
                    <Container  style={{backgroundColor:'rgb(201, 197, 197)', marginLeft:'20px', padding:'5px', borderRadius:'10px'}}>
                      {productCategory.categoryId
                        ? productCategory.categories.name
                        : null}
                    </Container>
                  </div>
                  <text>Biaya Produksi Satuan</text>
                  <h5>Rp. {productCost}</h5>
                </div>
              </div>
            </Col>
            <Col sm='7'>
              <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <h5>Material</h5>
                <text>Material yang digunakan</text>
                <div style={{marginTop:'5%'}}>
                <Table striped bordered hover>
                    <thead style={{textAlign:'center'}}>
                      <tr>
                        <th width='50'>#</th>
                        <th width='150'>Material</th>
                        <th width='100'>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {materialList.map((data) => {
                        return (
                          <tr key={data.id} data={data}>
                            <td>{data.materials.name}</td>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                        );
                      })} */}

                      <tr>
                        <td style={{textAlign:'center'}}>1</td>
                        <td>Kain</td>
                        <td>3 meter</td>
                      </tr>
                      <tr>
                        <td style={{textAlign:'center'}}>2</td>
                        <td>Denim</td>
                        <td>1 meter</td>
                      </tr>
                      <tr>
                        <td style={{textAlign:'center'}}>3</td>
                        <td>Pengait</td>
                        <td>2 pcs</td>
                      </tr>
                      <tr>
                        <td style={{textAlign:'center'}}>4</td>
                        <td>Resleting</td>
                        <td>4 pcs</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Container> 
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Row>
        <Col>
          <h3>Produk</h3>
        </Col>
      </Row>

      <div className="shadow-sm p-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <h3>Data Produk</h3>
            <Row>
              {loading ? productData.map((product) => {
                return (
                  <Col sm="3">
                    <div 
                      class="shadow-sm m-3 bg-body rounded"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleModalDetail(product)}
                    >
                      <div className="d-flex justify-content-center">
                        <Image
                          style={{ height: "150px", width: "150px" }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU"
                          rounded
                        />
                      </div>
                      <p className="d-flex pb-3 justify-content-center">{product.name}</p>
                    </div>
                  </Col>
                );
              }):
              <div>
                <LoadingData/>
              </div>
              }
            </Row>
          </Container> 
        </div>
    </div>
  );
};

export default DataProduk;