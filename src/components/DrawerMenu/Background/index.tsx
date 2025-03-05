import type { ComponentProps } from 'react'

// Css
import { css } from './../../../../styled-system/css'

type Props = ComponentProps<'div'>

export default function DrawerMenuBackground({ ...rest }: Props) {
  const styles = css({
    minH: '[100vh]',
    w: '[100%]',
    bgColor: '[rgba(0, 0, 0, 0.5)]',
    pos: 'fixed',
    zIndex: '[2]',
    top: '0',
    right: '[75%]'
  })

  return <div className={styles} draggable={false} {...rest} />
}
