import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='w-full bg-blue-950 text-center py-4'>
      <h1 className='text-2xl font-semibold text-cyan-100'>{title}</h1>
    </div>
  )
}

export default Heading
