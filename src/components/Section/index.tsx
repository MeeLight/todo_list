import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from './../../../styled-system/css'

interface IButtonProps {
  children: ReactNode | ReactNode[] | string
}

type ButtonProps = ComponentProps<'section'> & IButtonProps

export default function Section({ children, ...rest }: ButtonProps) {
  const styles = css({
    bgColor: 'white',
    px: '4',
    py: '3',
    borderRadius: 'md'
  })

  return (
    <section className={styles} {...rest}>
      {children}
    </section>
  )
}
