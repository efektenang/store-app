import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';

type ProductData = {
    title: string;
    price: number;
    description: string;
    image: string;
}


const CardProduct = (data: ProductData) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={data.image} />}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >

            <Meta title={data.title} description={data.description} />
        </Card>
    )
};

export default CardProduct;