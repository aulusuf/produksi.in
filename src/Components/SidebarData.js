import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import styled from "styled-components";
import { Menu, MenuItem, SidebarContent, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export const SidebarDataManajemen = [
  {
    MenuitemIcon: <AiIcons.AiOutlineDashboard />,
    label: "Dashboard",
    path: "/manajemen",
  },
  {
    title: "Produksi",
    SubmenuIcon: <GiIcons.GiGearHammer />,
    subNav: [
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Buat Permintaan",
        path: "/manajemen/produksi",
      },
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Riwayat Permintaan",
        path: "/manajemen/produksi/selesai",
      },
    ],
  },
  {
    title: "Produk",
    SubmenuIcon: <MdIcons.MdProductionQuantityLimits />,
    subNav: [
      {
        MenuitemIcon: <MdIcons.MdProductionQuantityLimits />,
        label: "Tambah Produk",
        path: "/manajemen/produk",
      },
      {
        MenuitemIcon: <MdIcons.MdProductionQuantityLimits />,
        label: "Data Produk",
        path: "/manajemen/produk/data-produk",
      },
      {
        MenuitemIcon: <MdIcons.MdProductionQuantityLimits />,
        label: "Kategori",
        path: "/manajemen/produk/kategori",
      },
    ],
  },
  {
    title: "Material",
    SubmenuIcon: <GiIcons.GiMaterialsScience />,
    subNav: [
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Permintaan",
        path: "/manajemen/material",
      },
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Data Material",
        path: "/manajemen/material/data-material",
      },
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Tipe",
        path: "/manajemen/material/tipe",
      },
    ],
  },
  {
    MenuitemIcon: <GiIcons.GiMaterialsScience />,
    label: "Stok",
    path: "/manajemen/material/stok",
  },
  {
    MenuitemIcon: <BiIcons.BiGroup />,
    label: "Pegawai",
    path: "/manajemen/pegawai",
  },
];

export const SidebarDataSupervisor = [
  {
    MenuitemIcon: <AiIcons.AiOutlineDashboard />,
    label: "Dashboard",
    path: "/supervisor",
  },
  {
    title: "Produksi",
    SubmenuIcon: <GiIcons.GiGearHammer />,
    subNav: [
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,

        label: "Permintaan",
        path: "/supervisor/produksi",
      },
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Data Produk",
        path: "/supervisor/produksi/produk", // -> it can be '/produk'
      },
    ],
  },
  {
    title: "Material",
    SubmenuIcon: <GiIcons.GiMaterialsScience />,
    subNav: [
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Permintaan",
        path: "/supervisor/material",
      },
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Sisa",
        path: "/supervisor/material/sisa",
      },
    ],
  },
  {
    MenuitemIcon: <BiIcons.BiGroup />,
    label: "Pegawai",
    path: "/supervisor/pegawai", // -> it can be '/pegawai'
  },
];
export const SidebarDataTimProduksi = [
  {
    MenuitemIcon: <AiIcons.AiOutlineDashboard />,
    label: "Dashboard",
    path: "/tim_produksi",
  },
  {
    title: "Produksi",
    SubmenuIcon: <GiIcons.GiGearHammer />,
    subNav: [
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Penugasan",
        path: "/tim_produksi/penugasan",
      },
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Data Produk",
        path: "/tim_produksi/data-produk", // -> it can be '/produk'
      },
    ],
  },
  {
    title: "Material",
    SubmenuIcon: <GiIcons.GiMaterialsScience />,
    subNav: [
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Permintaan",
        path: "/tim_produksi/material",
      },
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Sisa",
        path: "/tim_produksi/sisa",
      },
    ],
  },
];

const Menuitem = styled(MenuItem)`
  :hover {
    margin-left: 3px;
    margin-right: 5px;
    background-color: #006ebd;
    border-radius: 8px;
  }
`;
const Submenu = styled(SubMenu)`
  :hover {
    margin-left: 3px;
    margin-right: 5px;
    background-color: #006ebd;
    border-radius: 8px;
    color: white;
    text-decoration: none;
  }
`;

export const SidebarManajemen = () => {
  <SidebarContent>
    <Menu>
      <Menuitem icon={<AiIcons.AiOutlineDashboard />}>
        Dashboard
        <Link to="/manajemen" />
      </Menuitem>

      <Submenu title="Produksi" icon={<GiIcons.GiGearHammer />}>
        <Menuitem icon={<GiIcons.GiGearHammer />}>
          Buat Permintaan
          <Link to="/manajemen/produksi" />
        </Menuitem>
        <Menuitem icon={<GiIcons.GiGearHammer />}>
          Selesai
          <Link to="/manajemen/produksi/selesai" />
        </Menuitem>
      </Submenu>

      <Submenu title="Produk" icon={<MdIcons.MdProductionQuantityLimits />}>
        <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
          Tambah Produk
          <Link to="/manajemen/produk" />
        </Menuitem>
        <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
          Data Produk
          <Link to="/manajemen/produk/data-produk" />
        </Menuitem>
        <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
          Kategori
          <Link to="/manajemen/produk/kategori" />
        </Menuitem>
      </Submenu>

      <Submenu title="Material" icon={<GiIcons.GiMaterialsScience />}>
        <Menuitem icon={<GiIcons.GiMaterialsScience />}>
          Permintaan
          <Link to="/manajemen/material" />
        </Menuitem>
        <Menuitem icon={<GiIcons.GiMaterialsScience />}>
          Data Material
          <Link to="/manajemen/material/data-material" />
        </Menuitem>
        <Menuitem icon={<GiIcons.GiMaterialsScience />}>
          Tipe
          <Link to="/manajemen/material/tipe" />
        </Menuitem>
        <Menuitem icon={<GiIcons.GiMaterialsScience />}>
          Stok
          <Link to="/manajemen/material/stok" />
        </Menuitem>
      </Submenu>

      <Menuitem icon={<BiIcons.BiGroup />}>
        Pegawai
        <Link to="/manajemen/pegawai" />
      </Menuitem>
    </Menu>
  </SidebarContent>;
};
