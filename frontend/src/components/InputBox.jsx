import React from 'react'

const InputBox = ({label,onChange,type}) => {
  return (
    <div>
        <input type={type} placeholder={label} className='p-2 border border-black w-96 my-2'
        onChange={onChange}
        />
    </div>
  )
}

export default InputBox