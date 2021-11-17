import React from "react";
import { Switch, Route } from "react-router-dom";

// import { SidebarSupervisor } from "./components/supervisor/SidebarSupervisor";
import Sidebar from "./Sidebar";
import Dashboard from "./manajemen/Dashboard";
import BuatPermintaan from "./manajemen/produksi/PermintaanProduksi";
import SelesaiProduksi from "./manajemen/produksi/SelesaiProduksi";
import TambahProduk from "./manajemen/products/TambahProduk";
import DataProduk from "./manajemen/products/DataProduk";
import DataMaterial from "./manajemen/material/DataMaterial";
import PermintaanMaterial from "./manajemen/material/PermintaanMaterial";
import StokMaterial from "./manajemen/material/StokMaterial";
import Kategori from "./manajemen/Kategori";
import DataPegawai from "./manajemen/pegawai/DataPegawai";

import DashboardSupervisor from "./supervisor/Dashboard";
import PermintaanProduksiSupervisor from "./supervisor/produksi/PermintaanProduksi";
import ProsesProduksiSupervisor from "./supervisor/produksi/ProsesProduksi";
import SelesaiProduksiSupervisor from "./supervisor/produksi/SelesaiProduksi";
import DataProdukSupervisor from "./supervisor/produksi/DataProduk";
import PermintaanMaterialSupervisor from "./supervisor/material/PermintaanMaterial";
import StokMaterialSupervisor from "./supervisor/material/StokMaterial";
import DataPegawaiSupervisor from "./supervisor/pegawai/DataPegawai";

import DashboardProduksi from "./produksi/Dashboard";
import PermintaanMaterialProduksi from "./produksi/material/PermintaanMaterial";
import StokMaterialProduksi from "./produksi/material/StokMaterial";
import DataPegawaiProduksi from "./produksi/pegawai/DataPegawai";
import DataProdukProduksi from "./produksi/produksi/DataProduk";
import PenugasanProduksi from "./produksi/produksi/Penugasan";

const Routes = () => {
  return (
    <>
      <Sidebar />
      <Switch>
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
        <Route path="/tim_produksi/" exact component={DashboardProduksi} />
        <Route
          path="/tim_produksi/material_assignment"
          exact
          component={PermintaanMaterialProduksi}
        />
        <Route
          path="/tim_produksi/stokMaterial"
          exact
          component={StokMaterialProduksi}
        />
        <Route
          path="/tim_produksi/product"
          exact
          component={DataProdukProduksi}
        />
        <Route
          path="/tim_produksi/dataPegawai"
          exact
          component={DataPegawaiProduksi}
        />
        <Route
          path="/tim_produksi/assignment"
          exact
          component={PenugasanProduksi}
        />
      </Switch>
    </>
  );
};
export default Routes;
