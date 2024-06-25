import CardProduct from '@/components/CardProduct'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'
import React from 'react'

async function getProducts() {
    const result = await fetch('https://fakestoreapi.com/products?limit=8')
    if (!result.ok) throw new Error("Failed to fetch data.")

    return result.json()
}

export default async function ProductPage() {
    const products = await getProducts()
    return (
        <div className=''>
            <Title level={3}>Our Products</Title>

            <div className='grid gap-3 lg:grid-cols-4 md:grid-cols-2 mt-7 ml-8'>
                {products.length > 0 && products.map((product: any) => (
                    <Link href={`/product/${product.id}`} key={product.id}>
                        <CardProduct title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
