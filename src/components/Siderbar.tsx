"use client"

import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { ProductOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

export default function Sidebar({ subItem }: { subItem: { key: string; label: any; }[] }) {
  const usePath = usePathname()
  const parts = usePath.split('/');
  const category = parts.slice(-1)[0];
  const [path, setPath] = useState(decodeURI(category))

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[path]}
        defaultOpenKeys={['categories']}
        style={{ height: '100%', textTransform: "capitalize" }}
        items={[
          {
            type: 'divider',
          },
          {
            key: 'categories',
            label: 'Categories',
            icon: <ProductOutlined />,
            children: subItem
          },
        ]}
      />
    </Sider>
  );
}
