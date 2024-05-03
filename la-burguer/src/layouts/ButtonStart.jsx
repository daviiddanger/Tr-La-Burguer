import React from 'react'

const ButtonStart = (props) => {
  return (
    <div>
        <button className='px-6 py-3 text-3xl border-2 bg-orange-500 text-white hover:bg-brightColor hover:text-white transition-all rounded-md'>
            {props.title}
        </button>
    </div>
  )
}

export default ButtonStart