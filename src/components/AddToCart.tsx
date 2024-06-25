"use client"

import { Button, Modal } from 'antd'
import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';

const success = () => {
    Modal.success({
        centered: true,
        content: 'The product has been added to the cart.',
    });
};

export default function CartButton() {
    return (
        <div>
            <Button type="default" icon={<ShoppingCartOutlined />} size={'large'} onClick={success} />
        </div>
    )
}
