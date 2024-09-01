import React from 'react'

const Button = ({label,color}) => {
  return (
    <div>
     <button className='p-2 bg-transprent border transition-all ease-in duration-100 cursor-pointer  font-normal rounded-sm tracking-wider scale-1 hover:scale-105 transition-all ease-in duration-100 w-full' style={{color:color, borderColor:color}}>{label}</button>
    </div>
  )
}

export default Button