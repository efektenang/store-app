import CardProduct from '@/components/CardProduct'
import { getProducts } from '@/services/global.service'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'
import React from 'react'

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
