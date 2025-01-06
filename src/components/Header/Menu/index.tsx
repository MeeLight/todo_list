import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from '../../../../styled-system/css'

interface IHeaderProps {
  children?: ReactNode
}

type HeaderProps = ComponentProps<'div'> & IHeaderProps

export default function HeaderMenu({ children, ...rest }: HeaderProps) {
  const styles = css({
    h: 'full',
    w: 'max-content',
    p: '[0 0.5rem 0 0]',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //outline: '1px solid black',
    sm: {
      p: '[0 1.5rem 0 0]',
    },
    md: {
      display: 'none'
    }
  })

  const spanStyles = css({
    padding: '[0.1rem 0.9rem]',
    cursor: 'pointer',
    //rounded: '4xl',
    borderRadius: '[50%]',
    color: '[rgba(0, 0, 0, 0.4)]',
    outlineStyle: 'solid',
    //outlineOffset: '1',
    outlineWidth: '[1px]',
    outlineColor: '[rgba(0, 0, 0, 0.25)]'
  })

  return (
    <div className={styles} {...rest}>
      <span className={spanStyles}>=</span>
    </div>
  )
}
