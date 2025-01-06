import { Outlet } from 'react-router'

// Layouts
import HeaderLayout from './../Header'
import { css } from '../../../../styled-system/css'

// Components
//import BaseBackground from '@components/BaseBackground'

interface IBaseLayoutProps {}

export default function BaseLayout({}: IBaseLayoutProps) {
  return (
    <>
      {/* <BaseBackground /> */}
      <HeaderLayout />

      <div className={css({ p: '[calc(var(--headerHeight) + 1rem) 0 0 0]' })}>
        <Outlet />
      </div>
    </>
  )
}
