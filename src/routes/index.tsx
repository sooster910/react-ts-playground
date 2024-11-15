import { createBrowserRouter } from 'react-router-dom'
import Position from '../position/Position.tsx'
import Home from '../home/Home.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/position',
    element: <Position />,
  },
])
