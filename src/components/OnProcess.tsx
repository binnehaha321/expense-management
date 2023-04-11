import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const OnProcess: React.FC = () => (
  <Result
    status="warning"
    title="Tính năng đang được hoàn thiện."
    extra={
      <Link to="/">
        <Button type="primary" key="console">
          Tạo bảng chi tiêu
        </Button>
      </Link>
    }
  />
);

export default OnProcess;