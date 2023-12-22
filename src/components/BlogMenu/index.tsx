// import { useState } from 'react'
// import { Button, Toast } from '@douyinfe/semi-ui'
import { Nav, Avatar, Dropdown } from '@douyinfe/semi-ui'
import {
  IconStar,
  IconUser,
  IconUserGroup,
  IconSetting,
  IconEdit,
  IconSemiLogo,
  IconResso,
  IconCode,
  IconTerminal,
} from '@douyinfe/semi-icons'
import {
  IconTreeSelect,
  IconForm,
  IconBreadcrumb,
  IconBanner,
  IconBadge,
  IconNotification,
  IconSteps,
  IconTree,
  IconTabs,
  IconNavigation,
  IconDarkMode,
  IconColorPlatte,
  IconIntro,
  //   IconCode,
} from '@douyinfe/semi-icons-lab'

export default function BlogMenu() {
  const items = [
    { itemKey: 'blog-home', text: '首页', icon: <IconIntro />, path: '/' },
    {
      text: '前端',
      icon: <IconBanner />,
      itemKey: 'front-end',
      items: [
        {
          text: 'HTML',
          itemKey: 'html-css',
          icon: <IconCode />,
          path: '/html-css',
        },
        {
          text: 'VUE',
          itemKey: 'vue',
          icon: <IconTerminal />,
          path: '/vue',
        },
      ],
    },
    { itemKey: 'union', text: '活动管理', icon: <IconTreeSelect /> },
    {
      itemKey: 'approve-management',
      text: '审批管理',
      icon: <IconBreadcrumb />,
      items: [
        '入驻审核',
        {
          itemKey: 'operation-management',
          text: '运营管理',
          items: ['人员管理', '人员变更'],
        },
      ],
    },
    {
      text: '任务平台',
      icon: <IconSteps />,
      itemKey: 'job',
      items: ['任务管理', '用户任务查询'],
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        items={items}
        onSelect={(key) => console.log(key, 'text')}
        header={{
          logo: <IconResso style={{ height: '36px', fontSize: 36 }} />,
          text: 'HPW BLOG',
        }}
      ></Nav>
    </div>
  )
}
