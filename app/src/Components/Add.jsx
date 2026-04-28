import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function Add() {

    const [textArea, setTextArea] = useState("")
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
            {isAdd?<><div className='addBg z-30 fixed h-dvh w-full top-0 left-0 bg-[#00000069]'></div>
            <div className='add z-40 w-100 rounded-2xl min-h-100 bg-[#262626] fixed top-[calc(50dvh-200px)] flex flex-col items-center justify-center gap-4'>
                <h1 className='text-white self-start pl-9'>What's on your mind :</h1>
                <textarea ref={todoTextArea} value={textArea} maxLength={200} onChange={(e) => setTextArea(e.target.value)} className='bg-[#525252] w-10/12 min-h-12 rounded-lg text-white outline-0 pl-3 pt-1' placeholder="Type something... (200 max)"></textarea>
                <h1 className='text-white self-start pl-9'>Choose category :</h1>
                <input className='bg-[#525252] w-10/12 h-12 rounded-lg text-white' type='color'></input>
                <button className='bg-[#525252] w-40 h-11 rounded-2xl text-white' onClick={()=>{setIsAdd(false)}}>Add</button>
            </div></>:null}
            <div className='fixed bottom-15 right-[5%] bg-[#262626] h-15 w-15 rounded-full grid place-content-center text-2xl text-white' onClick={()=>{setIsAdd(true)}}><span class="material-symbols-outlined">add_2</span></div>
        </div>
        
    )
}

export default Add