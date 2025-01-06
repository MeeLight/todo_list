import type { ReactNode, ComponentProps } from 'react'

// Components
import DrawerMenuBackground from './Background'

// Css
import { css } from './../../../styled-system/css'

interface IProps {
  isOpen: boolean
  handleMenuClick: () => void
  children: ReactNode | ReactNode[] | string
}

type Props = ComponentProps<'div'> & IProps

export default function DrawerMenu({
  isOpen,
  handleMenuClick,
  children,
  ...rest
}: Props) {
  const styles = css({
    display: isOpen ? 'flex' : 'none',
    minH: '[100vh]',
    w: '[75%]',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    zIndex: '[3]',
    //gap: '[0.8rem]',
    bgColor: 'white',
    pos: 'fixed',
    top: '0',
    right: '0',
    md: {
      display: 'none'
    }
  })

  return (
    <div className={styles} {...rest}>
      <DrawerMenuBackground onClick={handleMenuClick} />
      {children}
    </div>
  )
}
