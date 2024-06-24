'use client'

import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
    HomeOutlined,
    ContactsOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Sidebar from './Siderbar';

const { Header, Sider, Content } = Layout;

export default function Template({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className='h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Sidebar />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}
