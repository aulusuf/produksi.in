// routing

import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/manajemen/Dashboard';
import BuatPermintaan from './pages/manajemen/produksi/PermintaanProduksi';
import ProsesProduksi from './pages/manajemen/produksi/ProsesProduksi';
import SelesaiProduksi from './pages/manajemen/produksi/SelesaiProduksi';
import TambahProduk from './pages/manajemen/products/TambahProduk';
import DataProduk from './pages/manajemen/products/DataProduk';
import PermintaanMaterial from './pages/manajemen/material/PermintaanMaterial';
import StokMaterial from './pages/manajemen/material/StokMaterial';
import Kategori from './pages/manajemen/Kategori';
import JadwalPegawai from './pages/manajemen/pegawai/JadwalPegawai';
import DataPegawai from './pages/manajemen/pegawai/DataPegawai';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/manajemen/dashboard' exact component={Dashboard} />
        <Route path='/manajemen/produksi/permintaan' exact component={BuatPermintaan} />
        <Route path='/manajemen/produksi/proses' exact component={ProsesProduksi} />
        <Route path='/manajemen/produksi/selesai' exact component={SelesaiProduksi} />
        <Route path='/manajemen/produk/tambah-produk' exact component={TambahProduk} />
        <Route path='/manajemen/produk/data-produk' exact component={DataProduk} />
        <Route path='/manajemen/material/permintaan' exact component={PermintaanMaterial} />
        <Route path='/manajemen/material/stok' exact component={StokMaterial} />
        <Route path='/manajemen/kategori' exact component={Kategori} />
        <Route path='/manajemen/pegawai' exact component={DataPegawai} />
      </Switch>
    </Router>
  );
}

export default App;

