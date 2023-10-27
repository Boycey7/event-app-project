"use client"
import {ApiClient} from '@/apiClient'
import { useState } from 'react'

const Login = () => {
    const apiClient = new ApiClient()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <form 
        onSubmit={(e) => {
            e.preventDefault()
            apiClient.login(email, password)
            .then((res) => {
                console.log(res)
                if (res.status === 200 && res.data?.token) {
                    window.localStorage.setItem('token', res.data.token)
                    window.location.href ="/"
                }
            })
        } }
    >
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login