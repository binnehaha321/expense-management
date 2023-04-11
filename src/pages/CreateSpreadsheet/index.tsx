import { useState } from "react";
import { Form, Table, message } from "antd";
import { FileAddOutlined } from '@ant-design/icons';
import CustomForm from '../../components/Form';
import { createNewSpreadsheet } from '../../utils/api';
import "./index.css";

const CreateSpreadsheet = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleCreateSpreadSheet = async (values: any) => {
    setLoading(true);
    const res = await createNewSpreadsheet(values.title);
    messageApi.success(`Tạo file ${res?.title} thành công!`);
    form.resetFields();
    setLoading(false);
  }

  return (
    <div className='create-spreadsheet'>
      {contextHolder}
      <CustomForm
        form={form}
        label='Tên file spreadsheet'
        name='title'
        placeholder='VD: Bảng chi tiêu tháng 3/2023'
        button_title='Tạo file'
        icon={<FileAddOutlined />}
        onFinish={handleCreateSpreadSheet}
        loading={loading}
      />
    </div>
  )
}

export default CreateSpreadsheet