import { Outlet } from 'react-router-dom'
import BlogMenu from '@/components/BlogMenu'
import './App.less'

function App() {
  return (
    <div className="container">
      <BlogMenu>
        <Outlet />
      </BlogMenu>
      {/* <div className="content"></div> */}
    </div>
  )
}

export default App
