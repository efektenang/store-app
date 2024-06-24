import { Menu } from 'antd'
import Link from 'next/link'
import React from 'react'
import {
  InfoCircleOutlined,
  HomeOutlined,
  ContactsOutlined,
  ProductOutlined
} from '@ant-design/icons';

export default function Sidebar() {
  return (
    <div>
      <div className="grid text-white text-xl font-bold py-2 ml-2 justify-items-center">
        Store App
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: (
              <Link href={'/'}>Home</Link>
            ),
          },
          {
            key: '2',
            icon: <ProductOutlined />,
            label: (
              <Link href={'/product'}>Product</Link>
            ),
          },
          {
            key: '3',
            icon: <ContactsOutlined />,
            label: (
              <Link href={'/contact'}>Contact Us</Link>
            ),
          },
          {
            key: '4',
            icon: <InfoCircleOutlined />,
            label: (
              <Link href={'/about'}>About Us</Link>
            ),
          },
        ]}
      />
    </div>
  )
}
