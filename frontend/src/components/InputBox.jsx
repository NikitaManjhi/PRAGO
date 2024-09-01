import React from 'react'

const InputBox = ({label}) => {
  return (
    <div>
        <input type="text" placeholder={label} className='p-2 border border-black w-96 my-2'/>
    </div>
  )
}

export default InputBox