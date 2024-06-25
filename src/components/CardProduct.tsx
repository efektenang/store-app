import React from 'react';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import Rating from './Rating';

type ProductData = {
    title: string;
    price: number;
    description: string;
    image: string;
    rate: number;
}

const CardProduct = (data: ProductData) => {
    return (
        <Card
            hoverable
            style={{ width: 240, padding: '0 10px', }}
            cover={<img alt="example" src={data.image} />}
        >
            <Meta title={data.title} description={`$ ${data.price}`} />
            <Rating rate={data.rate} />
        </Card>
    )
};

export default CardProduct;