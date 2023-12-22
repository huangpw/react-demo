import { lazy } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { RouteType } from '@/types/route'
import lazyLoad from './lazyLoad'

import App from '@/App'

const routes: Array<RouteType> = [
  {
    path: '/',
    key: '/',
    title: '首页',
    element: <App />,
    children: [
      {
        title: '博客首页',
        path: '',
        key: 'blogHome',
        element: lazyLoad(lazy(() => import('@/views/blog'))),
      },
    ],
  },
]

const router = createBrowserRouter(routes as RouteObject[])

export default router
