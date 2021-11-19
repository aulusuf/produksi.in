import React, { useState } from "react";
import "../Styles/bootstrap/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import Produksi from "../Assets/produksi.png";
import produksiIn from "../Assets/produksi.in.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = { username, password };
    axios
      .post("api/signin", user)
      .then((res) => {
        console.log(res);
        localStorage["name"] = res.data.name;
        localStorage["role"] = res.data.role[0];
        localStorage["token"] = res.data.token;
        // const roleNumber = JSON.parse(localStorage["role"]);
        // console.log(roleNumber);
        // console.log(localStorage);
        if (JSON.parse(localStorage["role"]) === 1) {
          history.push("/manajemen");
        } else if (JSON.parse(localStorage["role"]) === 2) {
          history.push("/supervisor");
        } else {
          history.push("/tim_produksi");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-login vh-100">
      <div className="container row">
        <div className="box col-xl-7 col-md-6 col-sm-8 col-xs-10 d-flex flex-column justify-content-center">
          <div className="logo pb-3 d-flex justify-content-center">
            <Image style={{ height: "80px" }} src={produksiIn} />
          </div>
          <div className="form-box bg-white rounded px-3 py-4">
            <div className="login-box">
              <Row>
                <Col sm="7" className="d-flex p-5 justify-content-center">
                  <Image style={{ height: "16vmax" }} src={Produksi} />
                </Col>
                <Col>
                  <div class="shadow-sm p-3 bg-body rounded">
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          className="form-control"
                          placeholder="Username"
                          type="text"
                          value={username}
                          onChange={({ target }) => setUsername(target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control"
                          placeholder="password"
                          type="password"
                          value={password}
                          onChange={({ target }) => setPassword(target.value)}
                        />
                      </div>
                      <div className="text-center pt-3">
                        <div>
                          <button className="btn btn-primary">
                            Masuk
                          </button>
                        </div>
                        <div>
                          <Link to="/manajemen/" className="py-3">
                            Lupa password?
                          </Link>
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
