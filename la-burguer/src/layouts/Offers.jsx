import React from 'react'

const offers = (props) => {
  return (
     <div>
        <button className='px-2 py-1 border-2 w-32 text-lg bg-white text-[#FFB800] hover:bg-green-500 hover:text-white transition-all rounded-sm'>
            {props.title}
        </button>
    </div>
  
  )
}

export default offers