'use client'

import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import Sidebar from './Siderbar';
import { Footer } from 'antd/es/layout/layout';

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
                <Header style={{ padding: 0, background: colorBgContainer }}>
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
