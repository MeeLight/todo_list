import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from './../../../styled-system/css'

interface IHeaderProps {
  children: ReactNode | ReactNode[] | string
}

type HeaderProps = ComponentProps<'nav'> & IHeaderProps

export default function NavBar({ children, ...rest }: HeaderProps) {
  const styles = css({
    w: 'full',
    display: 'none',
    md: {
      display: 'block',
      m: '[0 5rem 0 0]'
    }
  })

  return (
    <nav className={styles} {...rest}>
      {children}
    </nav>
  )
}
