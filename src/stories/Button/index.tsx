import { type ReactNode } from 'react'
import { css } from './../../../styled-system/css'

const styles = css({
  bg: 'blue.600',
  color: 'gray.200',
  px: '4',
  py: '3',
  cursor: 'pointer',
  borderRadius: 'md',
  _hover: { bg: 'blue.500' }
})

export interface IButtonProps {
  children: ReactNode
}

export const Button = ({ children }: IButtonProps) => {
  return <button className={styles}>{children}</button>
}
