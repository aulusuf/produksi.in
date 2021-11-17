import React from "react";
import "../styles/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import Produksi from '../img/produksi.png';
import produksiIn from '../img/produksi.in.png'

const Login = () => {
  return (
    <div className="bg-login vh-100">
      <div className="container row">
        <div className="box col-xl-7 col-md-6 col-sm-8 col-xs-10 d-flex flex-column justify-content-center">
          <div className="form-box bg-white rounded px-3 py-4">
            <div className="logo pb-3 d-flex justify-content-center">
              <Image style={{height:'80px'}} src={produksiIn}/>
            </div>
            <div className="login-box">
              <Row>
                <Col className="pt-5">
                  <Image style={{height:'200px'}} src={Produksi}/>
                </Col>
                <Col>
                <div class="shadow-sm p-3 bg-body rounded">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input className="form-control" placeholder="email" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input className="form-control" placeholder="password" />
                    </div>
                    <div className="text-center pt-3">
                      <div>
                        <button className="btn btn-primary">
                          Masuk
                          <Link to='/manajemen/' />
                        </button>
                      </div>
                      <div>
                        <Link to='/manajemen/' className="py-3">Lupa password?</Link>
                      </div>
                    </div>
                  </form>
                  </div>
                </Col>
              </Row>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
