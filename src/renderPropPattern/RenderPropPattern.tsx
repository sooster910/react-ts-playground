import { MouseEventHandler, ReactNode, useState } from 'react'
import { DisplayMousePositionProps } from '../position/Position.tsx'

type RenderMousePositionProps = {
  children: (props: { x: number; y: number }) => ReactNode
}

export function RenderPropPattern() {
  return (
    <>
      <h1>RenderPropPattern</h1>
      <RenderMousePosition>
        {({ x, y }) => <DisplayPosition x={x} y={y} />}
      </RenderMousePosition>
    </>
  )
}

export function RenderMousePosition({ children }: RenderMousePositionProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updatePosition: MouseEventHandler = (event) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }
  return (
    <div
      style={{ width: 500, height: 500, backgroundColor: 'beige' }}
      onClick={updatePosition}
    >
      {children(position)}
    </div>
  )
}
function DisplayPosition({ x, y }: Pick<DisplayMousePositionProps, 'x' | 'y'>) {
  return (
    <h3>
      x:{x}, y:{y}
    </h3>
  )
}
