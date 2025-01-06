import type { ComponentProps } from 'react'

// Css
import { css } from './../../../../styled-system/css'

type Props = ComponentProps<'div'>

export default function DrawerMenuAvatarContainer({
  children,
  ...rest
}: Props) {
  const styles = css({
    h: 'max-content',
    w: 'full',
    p: '[2.5rem 0]',
    bgColor: 'red.600',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5'
  })

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  )
}
