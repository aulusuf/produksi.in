import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

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
        label: "Lihat Permintaan",
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
        path: "/manajemen/produksi/data-produk",
      },
      {
        MenuitemIcon: <MdIcons.MdProductionQuantityLimits />,
        label: "Kategori",
        path: "/manajemen/produksi/kategori",
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
      {
        MenuitemIcon: <GiIcons.GiMaterialsScience />,
        label: "Stok",
        path: "/manajemen/material/stok",
      },
    ],
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
        label: "Lihat Permintaan",
        path: "/supervisor/produksi",
      },
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Proses",
        path: "/supervisor/produksi/proses",
      },
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Selesai",
        path: "/supervisor/produksi/selesai",
      },
      {
        MenuitemIcon: <GiIcons.GiGearHammer />,
        label: "Data Produk",
        path: "/supervisor/produksi/data-produk",
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
        label: "Stok",
        path: "/supervisor/material/stok",
      },
    ],
  },
  {
    MenuitemIcon: <BiIcons.BiGroup />,
    label: "Pegawai",
    path: "/supervisor/pegawai",
  },
];
