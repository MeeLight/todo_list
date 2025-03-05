import type { ReactNode } from 'react'
import { NavLink, type LinkProps } from 'react-router'

// Css
import { css, type Styles } from './../../../../../styled-system/css'

interface IProps extends LinkProps {
  to: string
  children: ReactNode | ReactNode[] | string
}

export default function NavBarLink({ to, children, ...rest }: IProps) {
  const baseStyles: Styles = {
    w: 'max-content',
    md: {
      // outline: '[1px solid black]',
      transition: 'all 560ms ease-in-out',
      maxW: '[7rem]'
    }
  }

  const defaultStyles = css(baseStyles, {
    ...baseStyles,
    md: {
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',
      _hover: {
        borderBottomColor: 'zinc.500',
        opacity: '[0.8]'
      }
    }
  })

  const activeStyles = css(baseStyles, {
    ...baseStyles,
    md: {
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'red.500',
      color: 'red.500',
      _hover: {
        color: 'red.400',
        borderBottomColor: 'red.400',
        opacity: '[0.8]'
      }
    }
  })

  return (
    <NavLink
      to={to ? to : '#'}
      className={({ isActive }) => (isActive ? activeStyles : defaultStyles)}
      {...rest}
    >
      {children}
    </NavLink>
  )
}
