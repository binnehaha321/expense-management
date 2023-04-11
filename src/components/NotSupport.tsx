import { Result, Typography } from 'antd';

const NotSupport: React.FC = () => (
  <Result
    title="Không hỗ trợ trên thiết bị di động!"
    extra={
      <Typography.Text>Sử dụng máy tính bảng hoặc desktop để có trải nghiệm tốt nhất.</Typography.Text>
    }
  />
);

export default NotSupport;