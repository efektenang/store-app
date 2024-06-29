"use client"

import { Badge, Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import {
    ShoppingCartOutlined, InfoCircleOutlined,
    HomeOutlined,
    ContactsOutlined,
    ShopOutlined
} from '@ant-design/icons';
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../app/styles.module.scss"

export default function Navbar() {
    const usePath = usePathname()
    const [path, setPath] = useState(usePath)
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: styles.primaryColor
        }}>
            <div className="grid text-white text-xl font-bold py-2 ml-2 justify-items-center">
                <Link href={"/"}>Store App</Link>
            </div>
            <Menu
                theme="dark"
                style={{ flex: 1, minWidth: 0, marginLeft: 55, backgroundColor: styles.primaryColor, }}
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
                        icon: <ShopOutlined />,
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
            <Badge count={5}>
                <Button type="default" icon={<ShoppingCartOutlined />} size={'large'} />
            </Badge>
        </Header>
    )
}
