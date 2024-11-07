import { type ReactNode } from 'react'
import { css } from './../../../styled-system/css'

const styles = css({
  color: 'zinc.600',
  fontSize: '4xl',
  _hover: { color: 'zinc.900' }
})

export interface ITitleProps {
  children: ReactNode
}

export const Title = ({ children }: ITitleProps) => {
  return <h1 className={styles}>{children}</h1>
}
