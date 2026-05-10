import React, { useState } from 'react'
import { deleteTodo } from '../scripts/todo'

function Todo({text, color, completed, todoId, fetchTodos}) {

  const [slashWidth,setSlashWidth] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const handleTodoDelete = (e)=>{
    deleteTodo(e, fetchTodos)
  }
  return (
    <div id={`${todoId}`} className={`relative todo w-full max-w-150 min-h-25 flex rounded-2xl bg-[#282828] overflow-hidden flex-row items-center justify-between pl-6 md:pl-8 pr-5 active:scale-95 transition duration-300 cursor-pointer ${isDeleted?"todoDeleted":null}`} onMouseEnter={()=>{setSlashWidth(true)}} onMouseLeave={()=>{setSlashWidth(false)}} onClick={()=>setIsDeleted(true)} onAnimationEnd={(e)=>{handleTodoDelete(e)}}>
        <div className={`absolute left-0 h-full ${!slashWidth?"w-2 md:w-4":"w-3 md:w-5"} transition-all`} style={{backgroundColor: `${color}`}}></div>
        <h1 className='text-white font-semibold h-full'>{text}</h1>
        <button className='w-12'>
          {!completed?<span className="material-symbols-outlined text-white text-2xl!">check_box_outline_blank</span>
          :<span className="material-symbols-outlined text-white text-2xl!">check_box</span>}
        </button>
    </div>
  )
}

export default Todo