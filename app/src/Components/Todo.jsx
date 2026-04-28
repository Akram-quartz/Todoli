import React, { useState } from 'react'

function Todo({text, color, done}) {

  const [slashWidth,setSlashWidth] = useState(false)
  return (
    <div className='relative todo w-full max-w-150 min-h-25 rounded-2xl bg-[#282828] overflow-hidden flex flex-row items-center justify-between pl-6 md:pl-8 pr-5 active:scale-95 transition duration-300' onMouseEnter={()=>{setSlashWidth(true)}} onMouseLeave={()=>{setSlashWidth(false)}}>
        <div className={`absolute left-0 h-full ${!slashWidth?"w-2 md:w-4":"w-3 md:w-5"} transition-all duration-100 ${color}`}></div>
        <h1 className='text-white font-semibold h-full'>{text}</h1>
        <button className='w-12'><span className="material-symbols-outlined text-white text-3xl!">check_box_outline_blank</span></button>
    </div>
  )
}

export default Todo