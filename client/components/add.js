"use client"
import React, { useState, useEffect } from 'react'
import { ApiClient } from '@/apiClient'

const EventForm = () => {
    const [token, setToken] = useState(null)
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [timeAndDate, setTimeAndDate] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const apiClient = new ApiClient(() => token)


  const handleSubmit = async (event) => {
    event.preventDefault()
    const addEvent = await apiClient.addEvent(title, timeAndDate, location, description)
    console.log(addEvent)   
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      <label>
        Time and date
        <input type="text" value={timeAndDate} onChange={(e) => setTimeAndDate(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EventForm