import React from 'react'

const Event = (props) => {
  return (
    <div className='bg-slate-200 py-4 px-4 w-[300px]'>
        <h2 className='text-2xl font-medium pb-2'>Title</h2>
        <h3 className='font-medium'>Location</h3>
        <p>Date and Time</p>
        <p className='pt-4'>Description - super fun party. Next.js is a React framework with pre-rendering abilities. This means that for every page, Next.js will try to generate the HTML of the page for better SEO and performance.</p>
        <p className='pt-2'>Created by bob</p>
    </div>
  )
}

export default Event