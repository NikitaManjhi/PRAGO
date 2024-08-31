import React from 'react'

const Title = ({title,desc}) => {
  return (
    <div className='flex flex-col  items-center justify-centermb-4 '>
    <h1 className='font-medium text-2xl tracking-widest text-center'>{title}</h1>
    <p className='text-lg'>{desc}</p>
    </div>
  )
}

export default Title