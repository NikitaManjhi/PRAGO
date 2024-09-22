import React from 'react'

const InputBox = ({label,onChange,type}) => {
  return (
  
        <input type={type} placeholder={label} className='w-full px-3 py-2 border border-gray-800'
        onChange={onChange} required
        />

  )
}

export default InputBox