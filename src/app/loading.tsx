import { Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  return (
    <Space>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Space>
  )
}
