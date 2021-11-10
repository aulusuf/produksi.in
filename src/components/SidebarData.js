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
    path: '/dashboard',
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
        path: '/produksi/permintaan',
        icon: <GiIcons.GiGearHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'Proses',
        path: '/produksi/proses',
        icon: <GiIcons.GiGearHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'Selesai',
        path: '/produksi/selesai',
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
        path: '/produk/tambah-produk',
        icon: <MdIcons.MdProductionQuantityLimits />,
        cName: 'sub-nav'
      },
      {
        title: 'Data Produk',
        path: '/produk/data-produk',
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
        path: '/material/permintaan',
        icon: <GiIcons.GiMaterialsScience />
      },
      {
        title: 'Stok',
        path: '/material/stok',
        icon: <GiIcons.GiMaterialsScience />
      }
    ]
  },
  {
    title: 'Kategori',
    path: '/kategori',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'Pegawai',
    icon: <BiIcons.BiGroup style={{color:'white'}}/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Jadwal',
        path: '/pegawai/jadwal',
        icon: <BiIcons.BiGroup />
      },
      {
        title: 'Data Pegawai',
        path: '/pegawai/data-pegawai',
        icon: <BiIcons.BiGroup />
      }
    ]
  },
];
