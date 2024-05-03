import React from 'react'

const offers = (props) => {
  return (
     <div>
        <button className='px-5 py-4 border-2  text-lg bg-green-500 text-[#fff] hover:bg-red-500 hover:text-white transition-all rounded-sm'>
            {props.title}
        </button>
    </div>
  
  )
}

export default offers;