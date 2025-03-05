import { useEffect } from 'react'
import { Link } from 'react-router'

// Components
import Title from '@components/Title'

// Css
import { css } from './../../../styled-system/css'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Oops! | To Dos'
  }, [])

  const styles = css({
    minH: '[100vh]',
    w: 'full',
    display: 'grid',
    placeContent: 'center',
    gap: '1.5'
  })

  return (
    <main className={styles}>
      <Title>404 | Página no encontrada</Title>

      <Link
        to='/'
        className={css({
          fontSize: '2xl',
          textAlign: 'center',
          textDecoration: 'underline',
          textUnderlineOffset: '[3px]'
        })}
      >
        Ir al inicio
      </Link>
    </main>
  )
}
