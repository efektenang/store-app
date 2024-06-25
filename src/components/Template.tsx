'use client'

import React from 'react';
import { Avatar, Badge, Button, Layout, Menu, theme } from 'antd';
import Sidebar from './Siderbar';
import { Footer } from 'antd/es/layout/layout';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function Template({ children }: { children: React.ReactNode }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} style={{ overflow: 'auto', height: '100vh', position: 'fixed' }}>
                <Sidebar />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Header className='flex justify-end items-center' style={{ background: colorBgContainer }}>
                    <Badge count={5}>
                        <Button type="default" icon={<ShoppingCartOutlined />} size={'large'} />
                    </Badge>
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
                <Footer style={{ textAlign: 'center' }}>
                    Store App ©{new Date().getFullYear()} Created by Efek Tenang
                </Footer>
            </Layout>
        </Layout>
    )
}
