import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, message } from 'antd';
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
  const [requireKey, setRequireKey] = useState(false);
  const [accessKey, setAccessKey] = useState("");

  const handleSheetname = useCallback((e: any[]) => {
    let sheetname = "";
    if (e[0]?.name[0] === 'tabId') {
      sheetname = e[0]?.value;
      // when access to author's sheet
      if (sheetname === import.meta.env.VITE_AUTHOR_ENV) {
        setRequireKey(true);
      } else {
        setRequireKey(false);
      }
    }

    const inputAccessKey = e[0]?.name[0] === 'access-key' && e[0]?.value;
    setAccessKey(inputAccessKey);

  }, [])

  const handleCheckUpload = () => {
    if (requireKey) {
      if (accessKey === import.meta.env.VITE_AUTHOR_KEY) {
        form.submit();
      } else {
        messageApi.error("Mã truy cập không hợp lệ!");
        return;
      }
    }
    form.submit();
  }

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
    setRequireKey(false);
  }

  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        title="Tên sheet bạn muốn lưu vào"
        onCancel={onCancel}
        confirmLoading={loading}
        destroyOnClose
        onOk={handleCheckUpload}
        okText={"Upload"}
      >
        <CustomForm
          form={form}
          onFinish={handleUploadData}
          onFieldsChange={handleSheetname}
          name='tabId'
          loading={loading}
          required
          requiredMsg='Vui lòng nhập tên sheet!'
          placeholder='Nhập tên sheet'
          requireKey={requireKey}
          label='Tên sheet'
        />
      </Modal>
    </>
  )
}

export default UploadData