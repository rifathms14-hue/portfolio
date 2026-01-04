'use client'

import { GridPattern } from './grid-pattern'

export default function GridPatternWrapper() {
  return (
    <GridPattern
      width={40}
      height={40}
      x={-1}
      y={-1}
      squares={[
        [4, 4],
        [5, 1],
        [8, 2],
        [5, 3],
        [5, 5],
      ]}
      style={{
        maskImage: 'radial-gradient(600px circle at center, white, transparent)',
        WebkitMaskImage: 'radial-gradient(600px circle at center, white, transparent)',
        left: 0,
        right: 0,
        top: '-30%',
        height: '200%',
        transform: 'skewY(12deg)',
        opacity: 1,
      }}
    />
  )
}




