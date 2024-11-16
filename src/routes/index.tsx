import { createBrowserRouter } from 'react-router-dom'
import Position from '../position/Position.tsx'
import Home from '../home/Home.tsx'
import CountDown from '../countdown/CountDown.tsx'
import { RenderPropPattern } from '../renderPropPattern/RenderPropPattern.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/position',
    element: <Position />,
  },
  {
    path: '/countdown',
    element: <CountDown />,
  },
  {
    path: '/renderPropPattern',
    element: <RenderPropPattern />,
  },
])
