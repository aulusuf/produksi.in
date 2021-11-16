import React from "react";
import "../styles/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login = () => {
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
                    <button className="btn btn-primary">Masuk</button>
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
