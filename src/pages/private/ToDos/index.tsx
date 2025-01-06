import { useEffect } from 'react'

// Layouts

// Components
import Title from '@components/Title'

export default function ToDosPage() {
  useEffect(() => {
    document.title = 'Tareas | To Dos'
  }, [])

  return (
    <>
      <Title>Tareas</Title>
    </>
  )
}
