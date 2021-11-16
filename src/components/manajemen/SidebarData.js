import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/manajemen/',
    icon: <AiIcons.AiOutlineDashboard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Produksi',
    icon: <GiIcons.GiGearHammer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Buat Permintaan',
        path: '/manajemen/produksi/permintaan',
        icon: <GiIcons.GiGearHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'Selesai',
        path: '/manajemen/produksi/selesai',
        icon: <GiIcons.GiGearHammer />
      }
    ]
  },
  {
    title: 'Produk',
    icon: <MdIcons.MdProductionQuantityLimits />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tambah Produk',
        path: '/manajemen/produk/tambah-produk',
        icon: <MdIcons.MdProductionQuantityLimits />,
        cName: 'sub-nav'
      },
      {
        title: 'Data Produk',
        path: '/manajemen/produk/data-produk',
        icon: <MdIcons.MdProductionQuantityLimits />,
        cName: 'sub-nav'
      },
      {
        title: 'Kategori',
        path: '/manajemen/produk/kategori',
        icon: <MdIcons.MdProductionQuantityLimits />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Material',
    icon: <GiIcons.GiMaterialsScience />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Permintaan',
        path: '/manajemen/material/permintaan',
        icon: <GiIcons.GiMaterialsScience />
      },
      {
        title: 'Data Material',
        path: '/manajemen/material/data-material',
        icon: <GiIcons.GiMaterialsScience />
      },
      {
        title: 'Type',
        path: '/manajemen/material/tipe',
        icon: <GiIcons.GiMaterialsScience />
      },
      {
        title: 'Stok',
        path: '/manajemen/material/stok',
        icon: <GiIcons.GiMaterialsScience />
      }
    ]
  },
  {
    title: 'Pegawai',
    path: '/manajemen/pegawai',
    icon: <BiIcons.BiGroup style={{color:'white'}}/>,
  },
];
