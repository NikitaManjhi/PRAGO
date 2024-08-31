import React from 'react'

const Button = ({label}) => {
  return (
    <div>
     <button className='p-3 bg-transprent border  border-white transition-all ease-in duration-100 cursor-pointer text-white font-normal rounded-sm tracking-wider scale-1 hover:scale-105 transition-all ease-in duration-100'>{label}</button>
    </div>
  )
}

export default Button