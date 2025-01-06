import { useState } from 'react'

// Header
import Header from '@components/Header'
import HeaderBrand from '@components/Header/Brand'
import HeaderMenu from '@components/Header/Menu'

// NavBar
import NavBar from '@components/NavBar'
import NavBarList from '@components/NavBar/List'
import NavBarLink from '@components/NavBar/items/Link'

// Menu Drawer
import DrawerMenu from '@components/DrawerMenu'

// Others Components
import { Link, NavLink } from 'react-router'
import Avvvatars from 'avvvatars-react'
import Title from '@components/Title'

// Css
import { css } from '../../../../styled-system/css'
import DrawerMenuAvatarContainer from '@components/DrawerMenu/AvatarContainer'

interface IProps {
  isMobileBar?: boolean
}

export default function HeaderLayout({ isMobileBar = false }: IProps) {
  const brandTitleStyles = css({
    //outline: '1px solid black',
    userSelect: 'none',
    md: {
      userSelect: 'all',
      fontSize: '[2rem]'
    }
  })

  // States
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] = useState<boolean>(false)

  // Events
  const handleMenuClick = () => {
    setIsOpenDrawerMenu(!isOpenDrawerMenu)
  }

  return (
    <Header>
      {!isMobileBar && (
        <DrawerMenu isOpen={isOpenDrawerMenu} handleMenuClick={handleMenuClick}>
          <DrawerMenuAvatarContainer>
            <span
              className={css({
                sm: {
                  display: 'none'
                }
              })}
            >
              <Avvvatars value='José' style='character' size={96} />
            </span>

            <span
              className={css({
                display: 'none',
                sm: {
                  display: 'block'
                }
              })}
            >
              <Avvvatars value='Moises Reyes' style='character' size={124} />
            </span>

            <h3
              className={css({
                p: '[1.25rem 0 0 0]',
                fontWeight: '[500]',
                textAlign: 'center',
                color: 'white',
                textTransform: 'uppercase',
                fontSize: 'lg',
                sm: {
                  fontSize: 'lg'
                }
              })}
            >
              Moises Reyes
            </h3>

            <small
              className={css({
                m: '[0.4rem 0 0 0]',
                textAlign: 'center',
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                fontWeight: '[400]',
                color: 'white',
                fontSize: 'xs',
                sm: {
                  fontSize: 'sm'
                }
              })}
            >
              Última sesión:{' '}
              <span>
                {new Intl.DateTimeFormat('es-ve', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit'
                }).format(new Date())}
              </span>
            </small>
          </DrawerMenuAvatarContainer>

          <ul
            className={css({
              w: 'full',
              display: 'flex',
              flexDir: 'column',
              alignItems: 'center',
              justifyContent: 'start',
              //p: '[0 1.25rem]',
              m: '[0]',
              gap: '[0rem]',
              fontSize: 'sm',
              //outline: '[1px solid black]',
              sm: {
                fontSize: 'xl'
              }
            })}
          >
            <NavLink
              to='/config'
              className={({ isActive }) =>
                isActive ?
                  css({
                    w: 'full',
                    bgColor: 'red.200',
                    color: 'red.500',
                    p: '[0.5rem 1rem]'
                  })
                : css({ w: 'full', p: '[0.5rem 1rem]' })
              }
            >
              Configuración
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ?
                  css({
                    w: 'full',
                    bgColor: 'red.200',
                    color: 'red.500',
                    p: '[0.5rem 1rem]'
                  })
                : css({ w: 'full', p: '[0.5rem 1rem]' })
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to='/todos'
              className={({ isActive }) =>
                isActive ?
                  css({
                    w: 'full',
                    bgColor: 'red.200',
                    color: 'red.500',
                    p: '[0.5rem 1rem]'
                  })
                : css({ w: 'full', p: '[0.5rem 1rem]' })
              }
            >
              Tareas
            </NavLink>
          </ul>
        </DrawerMenu>
      )}

      <HeaderBrand>
        <Link to='/'>
          <Title className={brandTitleStyles}>To Do</Title>
        </Link>
      </HeaderBrand>

      {!isMobileBar && <HeaderMenu onClick={handleMenuClick} />}

      <NavBar>
        <NavBarList>
          <NavBarLink to='/'>Inicio</NavBarLink>
          <NavBarLink to='/todos'>Tareas</NavBarLink>
        </NavBarList>
      </NavBar>
    </Header>
  )
}
