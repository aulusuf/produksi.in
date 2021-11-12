import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/supervisor/dashboard',
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
        title: 'Permintaan',
        path: '/supervisor/produksi/permintaan',
        icon: <GiIcons.GiGearHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'Proses',
        path: '/supervisor/produksi/proses',
        icon: <GiIcons.GiGearHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'Selesai',
        path: '/supervisor/produksi/selesai',
        icon: <GiIcons.GiGearHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'Data Produk',
        path: '/supervisor/produksi/data-produk',
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
        path: '/supervisor/material/permintaan',
        icon: <GiIcons.GiMaterialsScience />
      },
      {
        title: 'Stok',
        path: '/supervisor/material/stok',
        icon: <GiIcons.GiMaterialsScience />
      }
    ]
  },
  {
    title: 'Pegawai',
    path: '/supervisor/pegawai',
    icon: <BiIcons.BiGroup style={{color:'white'}}/>,
  },
];
