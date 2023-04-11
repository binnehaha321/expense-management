import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Table, InputNumber, Button, DatePicker, Select, Input, Popconfirm, Form, Space, message, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { CloudUploadOutlined, DeleteOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { MonthlyProps } from "../../models";
import { options } from '../../constants/Category';
import { formatCost, getLocal, parseJSON, removeLocal, saveLocal, stringifyJSON } from '../../utils/functions';
import UploadData from '../UploadData';
import { remove, submit } from '../../store/features/expenseSlice';
import { setModalOpen } from '../../store/features/modalSlice';
import LinkSpreadsheet from '../../components/partials/LinkSpreadsheet';

const Monthly = () => {
  const this_month = new Date().getMonth()
  const this_year = new Date().getFullYear()
  const [form] = Form.useForm();
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1)
  const [dataSource, setDataSource] = useState<MonthlyProps[]>([]);

  const columns: ColumnsType<MonthlyProps> = [
    {
      title: 'No.',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Ngày',
      dataIndex: 'datetime',
      key: 'datetime',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Mục chi',
      dataIndex: 'expense',
      key: 'expense',
    },
    {
      title: 'Thành tiền',
      dataIndex: 'cost',
      key: 'cost',
      render: (value) => formatCost(value)
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
    },
    {
      dataIndex: 'add_expense',
      key: 'add_expense',
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Chắc chắn xóa?" onConfirm={() => handleDelete(record.key)}>
            <a style={{ color: "red" }}>Xóa chi tiêu</a>
          </Popconfirm>
        ) : null,
    },
  ]

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    dispatch(submit(JSON.stringify(newData)));
    messageApi.success("Đã xóa chi tiêu!");
  };

  const handleAddExpense = (values: any) => {
    const { $D, $M, $y } = values.datetime
    const newExpense = { ...values, key: count, datetime: `${$D}/${$M + 1}/${$y}` };
    const current_expense = [...dataSource, newExpense]
    setDataSource(current_expense);
    dispatch(submit(stringifyJSON(current_expense)));
    setCount(count + 1);
    form.resetFields();
  }

  useEffect(() => {
    const expense = () => {
      return dataSource.reduce((acc, cur) => {
        return acc + cur.cost
      }, 0)
    }
    setTotalExpense(expense())
  }, [dataSource])

  const handleSaveTemp = () => {
    if (dataSource.length > 0) {
      saveLocal("data", dataSource);
      save_temp_success();
    } else {
      warning();
    }
  }

  const handleDeleteTemp = () => {
    if (dataSource.length > 0) {
      removeLocal("data");
      setDataSource([]);
      dispatch(remove());
      delete_temp_success();
    } else {
      warning();
    }
  }

  useEffect(() => {
    const data = getLocal("data");
    if (data) {
      const temp_data = parseJSON(data);
      setDataSource(temp_data);
      dispatch(submit(data));
    }
  }, []);

  // auto save after a minute
  useEffect(() => {
    let autoSave: any;
    if (dataSource.length !== 0) {
      autoSave = setTimeout(handleSaveTemp, 60000)
    }
    return () => clearTimeout(autoSave);
  }, [dataSource])

  const warning = () => {
    messageApi?.warning('Chưa có dữ liệu!');
  };

  const save_temp_success = () => {
    messageApi?.success('Đã lưu tạm thời!');
  };

  const delete_temp_success = () => {
    messageApi?.success('Đã xóa dữ liệu tạm thời!');
  };

  return (
    <div className='container'>
      {contextHolder}
      <h3 style={{ color: "black" }}>
        Tháng {this_month}/{this_year} ({<LinkSpreadsheet />})
      </h3>
      <h3 style={{ color: "orange" }}>Tổng chi tiêu: {formatCost(totalExpense)}</h3>

      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "#FFF", padding: "1rem", marginBlock: "1rem", borderRadius: "10px" }}
        onFinish={handleAddExpense}
      >
        <Space align='start' wrap>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Chọn ngày',
              },
            ]}
            label="Ngày"
            name={"datetime"}
          >
            <DatePicker format={"DD/MM/YYYY"} placeholder='Chọn ngày' autoFocus />
          </Form.Item>
          <Form.Item rules={[
            {
              required: true,
              message: 'Chọn danh mục',
            },
          ]} label="Danh mục" name={"category"}>
            <Select options={options} style={{ width: "150px" }} showSearch placeholder="Chọn danh mục" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập mục chi',
              },
            ]}
            label="Mục chi"
            name={"expense"}
          >
            <Input placeholder='Đá banh' />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập giá tiền',
              },
            ]}
            label="Thành tiền"
            name={"cost"}
          >
            <InputNumber
              formatter={(value) => formatCost(value)}
              parser={(value) => value!.replace(/$\s?|(,*)/g, '')}
              placeholder='43,000'
              style={{ width: "200px" }}
            />
          </Form.Item>
          <Form.Item label="Ghi chú" name={"note"}>
            <Input.TextArea style={{ width: "200px" }} placeholder='Địa điểm, dịp lễ,...' />
          </Form.Item>
        </Space>
        <Button
          type='primary'
          htmlType='submit'
          style={{ width: "150px", display: "block" }}
          icon={<PlusOutlined />}
        >
          Thêm chi tiêu
        </Button>
      </Form>

      <Table
        scroll={{
          y: "400px"
        }}
        columns={columns}
        dataSource={dataSource}
        pagination={{ hideOnSinglePage: true, pageSize: 100 }}
        footer={() => (
          <Space>
            <Button
              onClick={handleSaveTemp}
              type='dashed'
              danger
              icon={<SaveOutlined />}
            >
              Lưu tạm thời
            </Button>

            <Popconfirm
              title="Chắc chắn xóa?"
              description="Hãy đảm bảo bạn đã lưu dữ liệu trên."
              onConfirm={handleDeleteTemp}
            >
              <Tooltip title="Khuyến cáo: Hãy xóa định kỳ 30 ngày/ lần" placement='right'>
                <Button
                  type='primary'
                  danger
                  icon={<DeleteOutlined />}
                >
                  Xóa dữ liệu tạm thời
                </Button>
              </Tooltip>
            </Popconfirm>
            {dataSource.length !== 0 && (
              <Button
                onClick={() => dispatch(setModalOpen(true))}
                type='primary'
                icon={<CloudUploadOutlined />}
              >
                Upload lên Google sheet
              </Button>
            )}

          </Space>
        )}
      />
      <UploadData onCancel={() => dispatch(setModalOpen(false))} />
    </div>
  )
}

export default Monthly