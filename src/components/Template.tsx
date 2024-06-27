'use client'

import React from 'react';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Navbar from './Navbar';
import BreadCrumb from './Breadcrumb';
import Sidebar from './Siderbar';

const { Content } = Layout;

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <Navbar />
            <Layout>
                <BreadCrumb />
                <Layout style={{ padding: '0 24px 24px' }}>
                    
                    <Content style={{ padding: '20px 24px', minHeight: 280, background: "white" }}>{children}</Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Store App ©{new Date().getFullYear()} Created by Efek Tenang
                </Footer>
            </Layout>
        </Layout>
    )
}
