import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const items: MenuProps['items'] = [
    {
      label: <NavLink to={"/tao-spreadsheet"}>Tạo spreadsheet</NavLink>,
      key: "1"
    },
    {
      label: <NavLink to={"/"}>Tạo bảng chi tiêu</NavLink>,
      key: "2"
    },
  ]
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
    </Layout.Header>
  )
}

export default Header