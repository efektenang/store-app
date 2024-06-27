import React from 'react';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import Rating from './Rating';
import Image from 'next/image';

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
            cover={<Image src={data.image} alt="example" width={220} height={0}/>}
        >
            <Meta title={data.title} description={`$ ${data.price}`} />
            <Rating rate={data.rate} />
        </Card>
    )
};

export default CardProduct;