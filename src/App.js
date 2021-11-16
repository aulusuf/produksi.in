// routing
import "./styles/custom.css";

import React from 'react';
import './App.css';
import { Sidebar } from './components/manajemen/Sidebar';
import { SidebarSupervisor } from './components/supervisor/SidebarSupervisor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/manajemen/Dashboard';
import BuatPermintaan from './pages/manajemen/produksi/PermintaanProduksi';
import SelesaiProduksi from './pages/manajemen/produksi/SelesaiProduksi';
import TambahProduk from './pages/manajemen/products/TambahProduk';
import DataProduk from './pages/manajemen/products/DataProduk';
import DataMaterial from './pages/manajemen/material/DataMaterial';
import PermintaanMaterial from './pages/manajemen/material/PermintaanMaterial';
import StokMaterial from './pages/manajemen/material/StokMaterial';
import Kategori from './pages/manajemen/Kategori';
import DataPegawai from './pages/manajemen/pegawai/DataPegawai';
import Login from "./pages/Login";

import DashboardSupervisor from "./pages/supervisor/Dashboard";
import DashboardProduksi from "./pages/manajemen/Dashboard";
import PermintaanProduksiSupervisor from "./pages/supervisor/produksi/PermintaanProduksi";
import ProsesProduksiSupervisor from "./pages/supervisor/produksi/ProsesProduksi";
import SelesaiProduksiSupervisor from "./pages/supervisor/produksi/SelesaiProduksi";
import DataProdukSupervisor from "./pages/supervisor/produksi/DataProduk";
import PermintaanMaterialSupervisor from "./pages/supervisor/material/PermintaanMaterial";
import StokMaterialSupervisor from "./pages/supervisor/material/StokMaterial";
import DataPegawaiSupervisor from "./pages/supervisor/pegawai/DataPegawai";
import Tipe from "./pages/manajemen/material/Tipe";

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/manajemen">
            <Dashboard/>
          </Route>
          <Route path="/manajemen/produksi/permintaan">
            <BuatPermintaan/>
          </Route>
          <Route path="/manajemen/produksi/selesai">
            <SelesaiProduksi/>
          </Route>
          <Route path="/manajemen/produk/tambah-produk">
            <TambahProduk/>
          </Route>
          <Route path="/manajemen/produk/data-produk">
            <DataProduk/>
          </Route>
          <Route path="/manajemen/produk/kategori">
            <Kategori/>
          </Route>
          <Route path="/manajemen/material/data-material">
            <DataMaterial/>
          </Route>
          <Route path="/manajemen/material/permintaan">
            <PermintaanMaterial/>
          </Route>
          <Route path="/manajemen/material/stok">
            <StokMaterial/>
          </Route>
          <Route path="/manajemen/material/tipe">
            <Tipe/>
          </Route>
          <Route path="/manajemen/pegawai">
            <DataPegawai/>
          </Route>


          <Route exact path="/supervisor">
            <DashboardSupervisor/>
          </Route>
          <Route exact path="/produksi">
            <DashboardProduksi/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
  // return (
  //   <Router>
  //     <Sidebar />
  //     {/* <SidebarSupervisor /> */}
  //     <Switch>
  //       <Route path='/manajemen/dashboard' exact component={Dashboard} />
  //       <Route path='/manajemen/produksi/permintaan' exact component={BuatPermintaan} />
  //       <Route path='/manajemen/produksi/selesai' exact component={SelesaiProduksi} />
  //       <Route path='/manajemen/produk/tambah-produk' exact component={TambahProduk} />
  //       <Route path='/manajemen/produk/data-produk' exact component={DataProduk} />
  //       <Route path='/manajemen/material/data-material' exact component={DataMaterial} />
  //       <Route path='/manajemen/material/permintaan' exact component={PermintaanMaterial} />
  //       <Route path='/manajemen/material/stok' exact component={StokMaterial} />
  //       <Route path='/manajemen/kategori' exact component={Kategori} />
  //       <Route path='/manajemen/pegawai' exact component={DataPegawai} />


        
  //       <Route path='/supervisor/dashboard' exact component={DashboardSupervisor} />
  //       <Route path='/supervisor/produksi/permintaan' exact component={PermintaanProduksiSupervisor} />
  //       <Route path='/supervisor/produksi/proses' exact component={ProsesProduksiSupervisor} />
  //       <Route path='/supervisor/produksi/selesai' exact component={SelesaiProduksiSupervisor} />
  //       <Route path='/supervisor/produksi/data-produk' exact component={DataProdukSupervisor} />
  //       <Route path='/supervisor/material/permintaan' exact component={PermintaanMaterialSupervisor} />
  //       <Route path='/supervisor/material/stok' exact component={StokMaterialSupervisor} />
  //       <Route path='/supervisor/pegawai' exact component={DataPegawaiSupervisor} />
  //     </Switch>
  //   </Router>
  // );
}

export default App;
