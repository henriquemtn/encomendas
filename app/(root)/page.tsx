import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      Bem vindo
      <SignOutButton />
    </div>
  )
}