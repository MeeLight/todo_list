import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from './../../../../styled-system/css'

interface IProps {
  children: ReactNode
}

type Props = ComponentProps<'div'> & IProps

export default function HeaderBrand({ children, ...rest }: Props) {
  const styles = css({
    h: 'full',
    w: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    md: {
      m: '[0 0 0 0.5rem]'
    }
    //outline: '[1px solid black]'
  })

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  )
}
