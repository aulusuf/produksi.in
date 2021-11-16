import React, { useState } from "react";
import "../styles/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post("http://localhost:8080/api/login", user);
    setUser(response.data);
    localStorage.setItem("user", response.data);
    console.log(response.data);
  };
  if (user) {
    return <div>halo</div>;
  }
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
              <form onsubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
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
