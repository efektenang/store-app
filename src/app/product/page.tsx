import CardProduct from '@/components/CardProduct'
import Sidebar from '@/components/Siderbar'
import { getCategories, getProducts } from '@/services/global.service'
import { Layout } from 'antd'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'
import React from 'react'

async function transformToJSON() {
    const array: string[] = await getCategories()
    const result = array.map((item, index) => ({
        key: item,
        label: (
            <Link href={`/product/category/${item}`}>{item}</Link>
        )
    }))

    return result
}

export default async function ProductPage() {
    const products = await getProducts()
    const categories = await transformToJSON()

    return (
        <Layout>
            <Layout style={{ background: "white" }}><Title level={3}>Our Products</Title></Layout>
            <Layout>
                <Sidebar subItem={categories} />
                <Layout style={{ background: "white" }}>

                    <div className='grid gap-3 lg:grid-cols-4 md:grid-cols-2 mt-7 ml-8'>
                        {products.length > 0 && products.map((product: any) => (
                            <Link href={`/product/${product.id}`} key={product.id}>
                                <CardProduct title={product.title} price={product.price} description={product.description} image={product.image} rate={product.rating.rate} />
                            </Link>
                        ))}
                    </div>
                </Layout>
            </Layout>
        </Layout>
    )
}
