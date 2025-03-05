import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from './../../../styled-system/css'

interface IProps {
  children: ReactNode | ReactNode[] | string
}

type Props = ComponentProps<'button'> & IProps

export default function Button({ children, ...rest }: Props) {
  const styles = css({
    bgColor: 'blue.600',
    color: 'gray.200',
    px: '4',
    py: '3',
    cursor: 'pointer',
    rounded: 'md',
    _hover: { bg: 'blue.500' }
  })

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  )
}
