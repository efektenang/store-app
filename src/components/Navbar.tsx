"use client"

import { Badge, Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import {
    ShoppingCartOutlined, InfoCircleOutlined,
    HomeOutlined,
    ContactsOutlined,
    ProductOutlined
} from '@ant-design/icons';
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar() {
    const usePath = usePathname()
    const [path, setPath] = useState(usePath)
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="grid text-white text-xl font-bold py-2 ml-2 justify-items-center">
                Store App
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
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
                style={{ flex: 1, minWidth: 0, marginLeft: 55 }}
            />
            <Badge count={5}>
                <Button type="default" icon={<ShoppingCartOutlined />} size={'large'} />
            </Badge>
        </Header>
    )
}
