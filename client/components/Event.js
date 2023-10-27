import React from 'react'

const Event = (props) => {
  return (
    <div className='bg-slate-200 py-4 px-4 w-[300px] rounded-lg'>
        <h2 className='text-2xl font-medium pb-2'>{props.title}</h2>
        <h3 className='font-medium'>{props.location}</h3>
        <p>{props.dateAndTime}</p>
        <p className='pt-4'>{props.description}</p>
        <p className='pt-2'>Created by ...</p>
    </div>
  )
}

export default Event