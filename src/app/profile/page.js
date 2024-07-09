import React from 'react'
import { redirect } from 'next/navigation'
export default function Profile() {
  redirect('/')
  return (
    <div>Profile</div>
  )
}
