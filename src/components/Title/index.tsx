import type { ReactNode, ComponentProps } from 'react'

// Css
import { css, type Styles } from './../../../styled-system/css'

interface IProps {
  className?: string
  children: ReactNode | ReactNode[] | string
}

type Props = ComponentProps<'h1'> & IProps

export default function Title({ className, children, ...rest }: Props) {
  const styles: Styles = {
    w: 'max-content',
    textAlign: 'center',
    fontSize: '3xl',
    fontWeight: 'bold',
    //outline: '1px solid black',
    md: {
      fontSize: '4xl'
    }
  }

  return (
    <h1 className={`${css(styles)} ${className}`} {...rest}>
      {children}
    </h1>
  )
}
