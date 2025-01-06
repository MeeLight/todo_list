import { useEffect } from 'react'

// Layouts

// Components
import Title from '@components/Title'

export default function ConfigPage() {
  useEffect(() => {
    document.title = 'Configuración | To Dos'
  }, [])

  return (
    <>
      <Title>Configuración</Title>
    </>
  )
}
