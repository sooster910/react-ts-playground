import React, { useState } from 'react'

interface DisplayMousePositionProps {
  x: number
  y: number
}

function DisplayMousePosition({ x, y }: DisplayMousePositionProps) {
  return (
    <div>
      <span>x:{x}</span>
      <span>y:{y}</span>{' '}
    </div>
  )
}

// 마우스의 x, y의 현재 위치 업데이트 하기
function Position() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const currentX = e.clientX
    const currentY = e.clientY
    setPosition({ x: currentX, y: currentY })
  }

  return (
    <div>
      <DisplayMousePosition x={x} y={y} />
      <div
        style={{ width: '500px', height: '500px', backgroundColor: 'beige' }}
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  )
}

export default Position
