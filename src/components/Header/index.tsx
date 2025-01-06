import type { ReactNode, ComponentProps } from 'react'

// Css
import { css, type Styles } from './../../../styled-system/css'

interface IProps {
  className?: string
  children: ReactNode | ReactNode[] | string
}

type Props = ComponentProps<'header'> & IProps

export default function Header({ children, className, ...rest }: Props) {
  const styles: Styles = {
    h: '[var(--headerHeight)]',
    w: 'full',
    pos: 'fixed',
    top: '0',
    zIndex: '[1]',
    fontSize: '3xl',
    fontWeight: 'bold',
    bgColor: 'white',
    color: 'textColor',
    p: '[0 0 0 0.5rem]',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '[1.75rem]',
    //outline: '1px solid red',
    sm: {
      p: '[0 0 0 1.5rem]'
    },
    md: {
      fontSize: 'xl',
      justifyContent: 'space-between'
    }
  }

  return (
    <header className={`${css(styles)} ${className}`} {...rest}>
      {children}
    </header>
  )
}
