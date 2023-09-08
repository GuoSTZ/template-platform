import {HomeOutlined, MailOutlined, PhoneOutlined, CalendarOutlined} from '@ant-design/icons';
import React from 'react';
import MicroApp from '@/components/MicroApp';
import { RoutesType } from '.';
import { config } from './config';
import i18n, { locale } from '@/locales';
import Home from '@/views/Home';
import { Outlet } from 'react-router-dom';

const getConfig = (name: string) => {
  return {
    name,
    ...config[name]
  }
}

const moduleRoutes: RoutesType[] = [
  {
    path: "home/*",
    name: i18n.t("host.menu.homePage"),
    icon: <HomeOutlined />,
    element: <Home />
  },
  {
    path: 'cli/*',
    name: i18n.t("host.menu.cli"),
    icon: <HomeOutlined />,
    element: <Outlet />,
    children: [
      {
        path: "reactAntdWebpack/*",
        name: i18n.t("host.menu.reactApp"),
        icon: <HomeOutlined />,
        element: <MicroApp {...getConfig('reactAntdWebpack')}/>
      },
    ]
  },
]

export default moduleRoutes;