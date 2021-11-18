import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import "./Styles/App.scss";
import "./Styles/Container.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import BuatPermintaan from "./Pages/manajemen/produksi/PermintaanProduksi";
import SelesaiProduksi from "./Pages/manajemen/produksi/SelesaiProduksi";
import TambahProduk from "./Pages/manajemen/products/TambahProduk";
import DataProduk from "./Pages/manajemen/products/DataProduk";
import DataMaterial from "./Pages/manajemen/material/DataMaterial";
import PermintaanMaterial from "./Pages/manajemen/material/PermintaanMaterial";
import StokMaterial from "./Pages/manajemen/material/StokMaterial";
import Kategori from "./Pages/manajemen/products/Kategori";
import DataPegawai from "./Pages/manajemen/pegawai/DataPegawai";
import Tipe from "./Pages/manajemen/material/Tipe";

import DashboardSupervisor from "./Pages/supervisor/Dashboard";
import PermintaanProduksi from "./Pages/supervisor/produksi/PermintaanProduksi";
import Material from "./Pages/supervisor/material/PermintaanMaterial";
import Stok from "./Pages/supervisor/material/StokMaterial";

import DashboardProduksi from "./Pages/produksi/Dashboard";

function App() {
  // eslint-disable-next-line
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {(props) => (
            <div className="parent">
              <Login />
            </div>
          )}
        </Route>
        {/* </Switch> */}
        <Route
          render={(props) => (
            <div style={{ display: "flex", height: "100%" }}>
              <Sidebar
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
              />

              <Route exact path="/manajemen">
                <div className="parent">
                  <Header />
                  <Dashboard />
                </div>
              </Route>
              <Route exact path="/manajemen/produksi">
                <div className="parent">
                  <Header />
                  <BuatPermintaan />
                </div>
              </Route>
              <Route path="/manajemen/produksi/selesai">
                <div className="parent">
                  <Header />
                  <SelesaiProduksi />
                </div>
              </Route>
              <Route exact path="/manajemen/produk">
                <div className="parent">
                  <Header />
                  <TambahProduk />
                </div>
              </Route>
              <Route path="/manajemen/produk/data-produk">
                <div className="parent">
                  <Header />
                  <DataProduk />
                </div>
              </Route>
              <Route path="/manajemen/produk/kategori">
                <div className="parent">
                  <Header />
                  <Kategori />
                </div>
              </Route>
              <Route exact path="/manajemen/material">
                <div className="parent">
                  <Header />
                  <PermintaanMaterial />
                </div>
              </Route>
              <Route path="/manajemen/material/data-material">
                <div className="parent">
                  <Header />
                  <DataMaterial />
                </div>
              </Route>
              <Route path="/manajemen/material/stok">
                <div className="parent">
                  <Header />
                  <StokMaterial />
                </div>
              </Route>
              <Route path="/manajemen/material/tipe">
                <div className="parent">
                  <Header />
                  <Tipe />
                </div>
              </Route>
              <Route path="/manajemen/pegawai">
                <div className="parent">
                  <Header />
                  <DataPegawai />
                </div>
              </Route>

              {/* Supervisor */}
              <Route exact path="/supervisor">
                <div className="parent">
                  <Header />
                  <DashboardSupervisor />
                </div>
              </Route>
              <Route exact path="/supervisor/produksi">
                <div className="parent">
                  <Header />
                  <PermintaanProduksi />
                </div>
              </Route>
              <Route path="/supervisor/produksi/data-produk">
                <div className="parent">
                  <Header />
                  <DataProduk />
                </div>
              </Route>
              <Route exact path="/supervisor/material">
                <div className="parent">
                  <Header />
                  <Material />
                </div>
              </Route>
              <Route path="/supervisor/material/stok">
                <div className="parent">
                  <Header />
                  <Stok />
                </div>
              </Route>
              <Route path="/supervisor/pegawai">
                <div className="parent">
                  <Header />
                  <DataPegawai />
                </div>
              </Route>

              {/* Produksi */}
              <Route exact path="/tim_produksi">
                <div className="parent">
                  <Header />
                  <DashboardProduksi />
                </div>
              </Route>
              <Route path="/tim-produksi/penugasan">
                <div className="parent">
                  <Header />
                  <PermintaanProduksi />
                </div>
              </Route>
              <Route path="/tim-produksi/data-produk">
                <div className="parent">
                  <Header />
                  <DataProduk />
                </div>
              </Route>
              <Route path="/tim-produksi/material">
                <div className="parent">
                  <Header />
                  <Material />
                </div>
              </Route>
              <Route path="/tim-produksi/sisa">
                <div className="parent">
                  <Header />
                  <Stok />
                </div>
              </Route>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
