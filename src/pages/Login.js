import React, { useState, useEffect } from "react";
import "../styles/bootstrap/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.services";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = { username, password };

    axios
      .post("api/signin", user)
      .then((res) => {
        localStorage["name"] = res.data.name;
        localStorage["role"] = res.data.role[0];
        localStorage["token"] = res.data.token;
        const roleNumber = JSON.stringify(localStorage["role"]);
        console.log(roleNumber, "test");
        console.log(localStorage);
        history.push("/base");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-login vh-100">
      <div className="container row">
        <div className="box col-xl-4 col-md-6 col-sm-8 col-xs-10 d-flex flex-column justify-content-center">
          <div className="form-box bg-white rounded px-3 py-4">
            <div className="logo pb-3">
              <h2>Produksi.in</h2>
              <p>Masuk untuk akses</p>
            </div>
            <div className="login-box">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </div>
                <div className="text-center pt-3">
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Masuk
                    </button>
                  </div>
                  <div>
                    <Link className="py-3">Lupa password?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
