import { Table, InputNumber } from "antd";
import { ColumnsType } from "antd/es/table";
import { FixedCostProps } from "../../models";

const FixedCost = () => {
  const columns: ColumnsType<FixedCostProps> = [
    {
      title: 'Mục chi',
      dataIndex: 'expense',
      key: 'expense',
    },
    {
      title: 'Thành tiền',
      dataIndex: 'cost',
      key: 'cost',
      render: (value) => <InputNumber
        formatter={(value) => `VNĐ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
        defaultValue={value}
        style={{ width: "200px" }}
      />
    },
  ]

  const data: FixedCostProps[] = [
    {
      key: 0,
      expense: "Tiền ăn",
      cost: 0,
    },
    {
      key: 1,
      expense: "Điện",
      cost: 0
    },
    {
      key: 3,
      expense: "Nước",
      cost: 0
    },
    {
      key: 4,
      expense: "Internet",
      cost: 0
    },
    {
      key: 5,
      expense: "Ông bà nội",
      cost: 500000
    },
    {
      key: 6,
      expense: "Mẹ",
      cost: 1000000
    },
  ]

  return (
    <div className="container">
      <h3>Chi phí cố định</h3>
      <Table
        columns={columns}
        dataSource={data}
        style={{ width: "fit-content" }}
        pagination={{ hideOnSinglePage: true }}
      />
    </div>
  )
}

export default FixedCost