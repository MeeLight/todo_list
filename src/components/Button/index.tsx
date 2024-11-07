import { type ReactNode, type ComponentProps } from 'react'
import styles from './styles'

interface IButtonProps {
  children: ReactNode
}

type ButtonProps = ComponentProps<'button'> & IButtonProps

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type='button' className={styles} {...rest}>
      {children}
    </button>
  )
}
