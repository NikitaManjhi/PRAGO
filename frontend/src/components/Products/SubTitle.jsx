import React from 'react'

const SubTitle = ({desc}) => {
  return (
    <div className=''>
        <p className={`w-3/4 m-auto text-xs sm:text-sm md:text-lg text-gray-600`}>{desc}</p>
    </div>
  )
}

export default SubTitle