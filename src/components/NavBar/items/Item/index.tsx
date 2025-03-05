import type { ReactNode, ComponentProps } from 'react'

// Css
import { css } from '../../../../../styled-system/css'

interface IProps {
  children: ReactNode | ReactNode[] | string
}

type Props = ComponentProps<'li'> & IProps

export default function NavBarList({ children, ...rest }: Props) {
  const styles = css({
    width: 'full',
    md: {
      w: '[4rem]',
      outline: '[1px solid black]'
    }
  })

  return (
    <li className={styles} {...rest}>
      {children}
    </li>
  )
}
