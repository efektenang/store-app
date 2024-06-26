"use client"

import { Breadcrumb } from 'antd'
import { usePathname } from 'next/navigation';
import React from 'react'

const readableNames: any = {
    about: 'About Us',
    contact: 'Contact Us',
    product: 'Our Products',
    category: "Categories"
};

export default function BreadCrumb() {
    const usePath = usePathname()
    const pathSegments = usePath.split('/').filter(segment => segment);
    const items = [{ title: "Home" },]
    pathSegments.map((segment, index) => {
        const readableName = readableNames[segment] || segment;
        items.push({ title: readableName })
    })

    return (
        <Breadcrumb style={{ margin: '16px 25px'}} items={items} />
    )
}
