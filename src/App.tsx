import { Outlet } from 'react-router-dom'
import BlogMenu from '@/components/BlogMenu'
import './App.less'
import { Layout } from '@douyinfe/semi-ui'
const { Header, Footer, Content } = Layout

function App() {
  return (
    <Layout>
      <Header>
        <BlogMenu />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
