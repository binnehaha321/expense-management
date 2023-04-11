import { Layout } from 'antd'
import Header from './Header'

const DefaultLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  )
}

export default DefaultLayout