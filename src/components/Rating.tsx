"use client"

import { Flex, Rate } from 'antd';
import React, { useState } from 'react'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function Rating({ rate }: { rate: number }) {
    const [value, setValue] = useState(rate);
    return (
        <Flex className='my-3' gap="middle" vertical >
            <Rate allowHalf tooltips={desc} value={value} className='text-sm' disabled />
        </Flex>
    )
}
