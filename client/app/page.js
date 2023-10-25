"use client"
import { ApiClient } from '@/apiClient'
import Register from '@/components/Register'
import login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import { useState } from 'react'

export default function Home() {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const logout = () => {
    window.localStorage.removeItem('token');
    setToken(undefined);
  }
  const client = new ApiClient(() => token, () => logout());




  return (
    <main className="">
     {token? <Dashboard client={client} /> : <Register client={client} />}
    </main>
  )
}
