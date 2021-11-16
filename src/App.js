// routing
import "./styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";

import { Sidebar } from "./components/manajemen/Sidebar";
import { SidebarSupervisor } from "./components/supervisor/SidebarSupervisor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/manajemen/Dashboard";
import BuatPermintaan from "./pages/manajemen/produksi/PermintaanProduksi";
import SelesaiProduksi from "./pages/manajemen/produksi/SelesaiProduksi";
import TambahProduk from "./pages/manajemen/products/TambahProduk";
import DataProduk from "./pages/manajemen/products/DataProduk";
import DataMaterial from "./pages/manajemen/material/DataMaterial";
import PermintaanMaterial from "./pages/manajemen/material/PermintaanMaterial";
import StokMaterial from "./pages/manajemen/material/StokMaterial";
import Kategori from "./pages/manajemen/Kategori";
import DataPegawai from "./pages/manajemen/pegawai/DataPegawai";

import DashboardSupervisor from "./pages/supervisor/Dashboard";
import PermintaanProduksiSupervisor from "./pages/supervisor/produksi/PermintaanProduksi";
import ProsesProduksiSupervisor from "./pages/supervisor/produksi/ProsesProduksi";
import SelesaiProduksiSupervisor from "./pages/supervisor/produksi/SelesaiProduksi";
import DataProdukSupervisor from "./pages/supervisor/produksi/DataProduk";
import PermintaanMaterialSupervisor from "./pages/supervisor/material/PermintaanMaterial";
import StokMaterialSupervisor from "./pages/supervisor/material/StokMaterial";
import DataPegawaiSupervisor from "./pages/supervisor/pegawai/DataPegawai";

import DashboardProduksi from "./pages/produksi/Dashboard";
import PermintaanMaterialProduksi from "./pages/produksi/material/PermintaanMaterial";
import StokMaterialProduksi from "./pages/produksi/material/StokMaterial";
import DataPegawaiProduksi from "./pages/produksi/pegawai/DataPegawai";
import DataProdukProduksi from "./pages/produksi/produksi/DataProduk";
import PenugasanProduksi from "./pages/produksi/produksi/PenugasanProduksi";
import RiwayatPenugasan from "./pages/produksi/produksi/RiwayatPenugasan";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <SidebarSupervisor /> */}
        <Route path="/manajemen/dashboard" exact component={Dashboard} />
        <Route
          path="/manajemen/produksi/permintaan"
          exact
          component={BuatPermintaan}
        />
        <Route
          path="/manajemen/produksi/selesai"
          exact
          component={SelesaiProduksi}
        />
        <Route
          path="/manajemen/produk/tambah-produk"
          exact
          component={TambahProduk}
        />
        <Route
          path="/manajemen/produk/data-produk"
          exact
          component={DataProduk}
        />
        <Route
          path="/manajemen/material/data-material"
          exact
          component={DataMaterial}
        />
        <Route
          path="/manajemen/material/permintaan"
          exact
          component={PermintaanMaterial}
        />
        <Route path="/manajemen/material/stok" exact component={StokMaterial} />
        <Route path="/manajemen/kategori" exact component={Kategori} />
        <Route path="/manajemen/pegawai" exact component={DataPegawai} />

        <Route
          path="/supervisor/dashboard"
          exact
          component={DashboardSupervisor}
        />
        <Route
          path="/supervisor/produksi/permintaan"
          exact
          component={PermintaanProduksiSupervisor}
        />
        <Route
          path="/supervisor/produksi/proses"
          exact
          component={ProsesProduksiSupervisor}
        />
        <Route
          path="/supervisor/produksi/selesai"
          exact
          component={SelesaiProduksiSupervisor}
        />
        <Route
          path="/supervisor/produksi/data-produk"
          exact
          component={DataProdukSupervisor}
        />
        <Route
          path="/supervisor/material/permintaan"
          exact
          component={PermintaanMaterialSupervisor}
        />
        <Route
          path="/supervisor/material/stok"
          exact
          component={StokMaterialSupervisor}
        />
        <Route
          path="/supervisor/pegawai"
          exact
          component={DataPegawaiSupervisor}
        />
        {/* Dari Hadi */}
        <Route path="/produksi/Dashboard" exact component={DashboardProduksi} />
        <Route
          path="/produksi/permintaanMaterial"
          exact
          component={PermintaanMaterialProduksi}
        />
        <Route
          path="/produksi/stokMaterial"
          exact
          component={StokMaterialProduksi}
        />
        <Route
          path="/produksi/dataProduk"
          exact
          component={DataProdukProduksi}
        />
        <Route
          path="/produksi/dataPegawai"
          exact
          component={DataPegawaiProduksi}
        />
        <Route
          path="/produksi/dataProduk"
          exact
          component={PenugasanProduksi}
        />
        <Route path="/produksi/dataProduk" exact component={RiwayatPenugasan} />
      </Switch>
    </Router>
  );
}

export default App;
