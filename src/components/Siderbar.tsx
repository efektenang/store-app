"use client"

import { Menu } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  InfoCircleOutlined,
  HomeOutlined,
  ContactsOutlined,
  ProductOutlined
} from '@ant-design/icons'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const usePath = usePathname()
  const [path, setPath] = useState(usePath)
  
  useEffect(() => {
    setPath(usePath)
  }, [])
  return (
    <div>
      <div className="grid text-white text-xl font-bold py-2 ml-2 justify-items-center">
        Store App
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[path]}
        items={[
          {
            key: '/home',
            icon: <HomeOutlined />,
            label: (
              <Link href={'/'} onClick={() => setPath(usePath)}>Home</Link>
            ),
          },
          {
            key: '/product',
            icon: <ProductOutlined />,
            label: (
              <Link href={'/product'} onClick={() => setPath(usePath)}>Product</Link>
            ),
          },
          {
            key: '/contact',
            icon: <ContactsOutlined />,
            label: (
              <Link href={'/contact'} onClick={() => setPath(usePath)}>Contact Us</Link>
            ),
          },
          {
            key: '/about',
            icon: <InfoCircleOutlined />,
            label: (
              <Link href={'/about'} onClick={() => setPath(usePath)}>About Us</Link>
            ),
          },
        ]}
      />
    </div>
  )
}
