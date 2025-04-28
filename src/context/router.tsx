import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import Main from '@pages/main'
import CardItem from '@components/card'

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Navigate to="catalog" replace />} />
          <Route path={'catalog'} element={<CardItem />} />
          <Route path={'favorite'} element={'Избранные'} />
        </Route>
        <Route path="*" element={'NotFound'} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterProvider
