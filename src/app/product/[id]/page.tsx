import { Button, Image, Rate } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { ShoppingOutlined } from '@ant-design/icons';
import CartButton from "@/components/AddToCart";
import { getProduct } from "@/services/global.service";

export default async function ProductDetailPage({ params }: { params: { id: number } }) {
    const product = await getProduct(params.id)
    return (
        <div>
            <Title level={3}>Product Detail</Title>
            <div className="flex gap-3 mt-8">
                <Image
                    width={400}
                    src={product.image}
                />

                <div className="ml-9 md:w-2/3">
                    <Title level={4}>{product.title}</Title>
                    <Text type="secondary" className="capitalize">{product.category}</Text>
                    <Rate allowHalf disabled defaultValue={product.rating.rate} className="block text-sm" />
                    <Text className="mt-5 block xl:w-2/3">{product.description}</Text>
                    <Title level={1} className="inline-block">${product.price}</Title> <p className="inline ml-4">Stock: {product.rating.count}</p>

                    <div className="flex gap-1">
                        <Button type="primary" icon={<ShoppingOutlined />} size={'large'}>
                            Buy Now
                        </Button>
                        <CartButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
