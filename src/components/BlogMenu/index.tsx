// import { useState } from 'react'
import SvgIcon from '../SvgIcon'
import styles from './index.module.less'

export default function BlogMenu({ children }: any) {
  return (
    <div className={styles.nav}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <SvgIcon name="logo" size={33}></SvgIcon>
        </div>
        <div className={styles.item + ' ' + styles.active}>
          <SvgIcon name="home" size={22}></SvgIcon>
        </div>
        <div className={styles.item}>
          <SvgIcon name="front" size={22}></SvgIcon>
        </div>
      </div>
      <div className={styles.child}></div>
      <div className="content">{children}</div>
    </div>
  )
}
