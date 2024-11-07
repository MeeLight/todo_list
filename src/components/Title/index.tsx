import { type ReactNode, type ComponentProps } from 'react'
import styles from './styles'

interface ITitleProps {
  children: ReactNode
}

type TitleProps = ComponentProps<'h1'> & ITitleProps

export default function Title({ children, ...rest }: TitleProps) {
  return (
    <h1 className={styles} {...rest}>
      {children}
    </h1>
  )
}
