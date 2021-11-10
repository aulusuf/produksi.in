// routing

import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BuatPermintaan from './pages/produksi/PermintaanProduksi';
import ProsesProduksi from './pages/produksi/ProsesProduksi';
import SelesaiProduksi from './pages/produksi/SelesaiProduksi';
import TambahProduk from './pages/products/TambahProduk';
import DataProduk from './pages/products/DataProduk';
import PermintaanMaterial from './pages/material/PermintaanMaterial';
import StokMaterial from './pages/material/StokMaterial';
import Kategori from './pages/Kategori';
import JadwalPegawai from './pages/pegawai/JadwalPegawai';
import DataPegawai from './pages/pegawai/DataPegawai';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/produksi/permintaan' exact component={BuatPermintaan} />
        <Route path='/produksi/proses' exact component={ProsesProduksi} />
        <Route path='/produksi/selesai' exact component={SelesaiProduksi} />
        <Route path='/produk/tambah-produk' exact component={TambahProduk} />
        <Route path='/produk/data-produk' exact component={DataProduk} />
        <Route path='/material/permintaan' exact component={PermintaanMaterial} />
        <Route path='/material/stok' exact component={StokMaterial} />
        <Route path='/kategori' exact component={Kategori} />
        <Route path='/pegawai/jadwal' exact component={JadwalPegawai} />
        <Route path='/pegawai/data-pegawai' exact component={DataPegawai} />
      </Switch>
    </Router>
  );
}

export default App;

