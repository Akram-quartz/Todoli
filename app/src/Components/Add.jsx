import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { addTodo } from '../scripts/todo';

function Add({categoryList, fetchTodos}) {

    const [textArea, setTextArea] = useState("")
    const [name, setName] = useState("");
    const todoTextArea = useRef(null)

    useEffect(()=>{
        const target = todoTextArea.current
        if(!target){return};

        target.style.height = "auto";
        target.style.height = target.scrollHeight + "px";

        
    },[textArea])

    const [isAdd, setIsAdd] = useState(false)
    
    return (
        <div className='relative flex items-center justify-center'>
            {isAdd?<><div className='addBg z-30 fixed h-dvh w-full top-0 left-0 bg-[#00000069]' onClick={()=>{setIsAdd(false)}}></div>
            <div className='add z-40 w-[90%] sm:w-100 rounded-2xl min-h-100 bg-[#262626] fixed top-[calc(50dvh-200px)] flex flex-col items-center justify-center gap-4'>
                <h1 className='text-white self-start pl-9'>What's on your mind :</h1>
                <textarea ref={todoTextArea} value={textArea} maxLength={200} onChange={(e) => setTextArea(e.target.value)} className='bg-[#525252] cursor-text w-10/12 min-h-12 rounded-lg text-white outline-0 pl-3 pt-1' placeholder="Type something... (200 max)"></textarea>
                <h1 className='text-white self-start pl-9'>Choose category :</h1>
                <select value={name} onChange={(e) => setName(e.target.value)} className='bg-[#525252] w-10/12 h-12 rounded-lg text-white cursor-pointer outline-0'>
                    {categoryList!=null?categoryList.map((e,i)=>{
                        return (<option key={e.categoryName} id={e.id} value={`${e.categoryName}`}>{e.categoryName}</option>)
                    }):null}
                </select>
                <button className='bg-[#525252] cursor-pointer w-40 h-11 rounded-2xl text-white' onClick={()=>{setIsAdd(false);addTodo(name, textArea, categoryList.find(obj=>obj.categoryName===name).id, fetchTodos)}}>Add</button>
            </div></>:null}
            <div className='fixed cursor-pointer bottom-15 right-[5%] bg-[#262626] h-15 w-15 rounded-full grid place-content-center text-2xl text-white' onClick={()=>{setIsAdd(true)}}><span className="material-symbols-outlined">add_2</span></div>
        </div>
        
    )
}

export default Add