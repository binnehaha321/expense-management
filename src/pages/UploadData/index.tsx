import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, message } from 'antd';
import { CloudUploadOutlined } from "@ant-design/icons";
import { RootState } from '../../store';
import CustomForm from '../../components/Form';
import { addNewRows, getDataFromSheet, uploadDataToSpreadsheet } from '../../utils/api';
import { stringifyJSON } from '../../utils/functions';
import { R1_expenseRows, R2_vi_rows } from '../../assets/expense';
import { setModalOpen } from '../../store/features/modalSlice';

interface UploadDataProps {
  onCancel: () => void
}

const UploadData = (props: UploadDataProps) => {
  const { onCancel } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const { open } = useSelector((state: RootState) => state.modal);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { json_data } = useSelector((state: RootState) => state.expense);
  const [defaultRows] = useState([R1_expenseRows, R2_vi_rows]);
  const dispatch = useDispatch()

  const handleUploadData = async (values: any) => {
    setLoading(true);
    const res = await getDataFromSheet(values?.tabId);
    if (res?.length === 0) {
      await addNewRows(values?.tabId, stringifyJSON(defaultRows))
    }
    await uploadDataToSpreadsheet(values?.tabId, json_data);
    dispatch(setModalOpen(false));
    form.resetFields();
    messageApi.success("Đã upload thành công!")
    setLoading(false);
  }

  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        title="Tên sheet bạn muốn lưu vào"
        onCancel={onCancel}
        confirmLoading
        destroyOnClose
        footer={null}
      >
        <CustomForm
          loading={loading}
          form={form}
          name='tabId'
          required
          requiredMsg='Vui lòng nhập tên sheet!'
          placeholder='Nhập tên sheet'
          button_title='Upload'
          icon={<CloudUploadOutlined />}
          onFinish={handleUploadData}
        />
      </Modal>
    </>
  )
}

export default UploadData