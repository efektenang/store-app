import CardProduct from '@/components/CardProduct'
import Title from 'antd/es/typography/Title'
import React from 'react'

async function getProducts() {
    const result = await fetch('https://fakestoreapi.com/products')

    if (!result.ok) throw new Error("Failed to fetch data.")

    return result.json()
}

export default async function ProductPage() {
    const products = await getProducts()
    return (
        <div>
            <Title level={3}>Our Product</Title>


            <div className='bg-black block'>
                {products.length > 0 && products.map((product: any) => (
                    <div key={product.id}>
                        <CardProduct title={product.title} price={product.price} description={product.description} image={product.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}
