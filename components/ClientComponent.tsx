'use client'
import { useEffect } from 'react'

export function ClientComponent({ children }) {
  console.log('I am Client Component, and I am being rendered')
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  return <>{children}</>
}
