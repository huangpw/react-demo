export interface RouteType {
  path?: string // 对应路由
  key: string // key值
  element?: LazyExoticComponent<any> // 对应页面
  title: string //页面标题
  icon?: ReactNode | string // 页面图标
  hidden?: boolean // 是否隐藏
  children?: RouteType[] // 子路由数组
}
