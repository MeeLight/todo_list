import { useEffect } from 'react'

// React Router
import { BrowserRouter, Routes, Route } from 'react-router'

// Layouts
import BaseLayout from '@layouts/public/BaseLayout'

// Pages
import HomePage from '@pages/public/Home'
import ToDosPage from '@pages/private/ToDos'
import ConfigPage from '@pages/private/Config'
import NotFoundPage from '@pages/public/404'

export default function ReactRouter() {
  useEffect(() => {}, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/config' element={<ConfigPage />} />

          <Route path='/todos'>
            <Route index element={<ToDosPage />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
