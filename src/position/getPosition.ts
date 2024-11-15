import React from 'react'

export function getPosition(event: React.MouseEvent<Element>): {
  x: number
  y: number
} {
  return { x: event.clientX, y: event.clientY }
}
