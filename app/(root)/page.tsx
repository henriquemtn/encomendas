import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      PRIVATE ROUTE 
      <SignOutButton />
    </div>
  )
}