import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from './../../../../styled-system/css'

interface IHeaderProps {
  children: ReactNode | ReactNode[] | string
}

type HeaderProps = ComponentProps<'ul'> & IHeaderProps

export default function NavBarList({ children, ...rest }: HeaderProps) {
  const styles = css({
    width: 'full',
    fontWeight: '[600]',
    //outline: '[1px solid black]',
    m: '[0 5rem 0 0]',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '[2rem]'
  })

  return (
    <ul className={styles} {...rest}>
      {children}
    </ul>
  )
}
