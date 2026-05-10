import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { addCategory } from '../scripts/category'

function Nav({setCategory, currentCategory, fetchCategories, categoryList}) {

  const [isCategory, setIsCategory] = useState(false);
  const [isCategoryHover, setIsCategoryHover] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const nameArea = useRef(null); 

  const handleCategoryFetch = async ()=>{
    setIsAdd(false);
    const add = await addCategory(name, color);
    fetchCategories();
  }

  return (
    <nav className={`nav text-white w-11/12 h-15 absolute top-8 rounded-4xl flex flex-row items-center justify-between px-[5%]`}>

        <div className='w-20 flex flex-row items-center justify-start gap-2'>
          <img src='/logo.png' className='h-6'></img>
          <h1 className='font-semibold hidden md:block'>Todoit</h1>
        </div>

        {isAdd?<><div className='addBg z-30 fixed h-dvh w-full top-0 left-0 bg-[#00000069]' onClick={()=>{setIsAdd(false)}}></div>
          <div className='add z-40 w-[90%] sm:w-100 rounded-2xl min-h-100 bg-[#262626] fixed top-[calc(50dvh-200px)] left-[5%] sm:left-[calc(50dvw-320px)] self-center flex flex-col items-center justify-center gap-4'>
            <h1 className='text-white self-start pl-9'>Choose category name :</h1>
            <input ref={nameArea} value={name} onChange={(e) => setName(e.target.value)} className='bg-[#525252] w-10/12 min-h-12 rounded-lg text-white outline-0 pl-3 pt-1' placeholder="ex : Work"></input>
            <h1 className='text-white self-start pl-9'>Choose color :</h1>
            <select value={color} onChange={(e) => setColor(e.target.value)} className='bg-[#525252] w-10/12 h-12 rounded-lg text-white'>
              <option value="WHITE">White</option>
              <option value="RED">Red</option>
              <option value="ORANGE">Orange</option>
              <option value="YELLOW">Yello</option>
              <option value="GREEN">Green</option>
              <option value="BLUE">Blue</option>
              <option value="PURPLE">Purple</option>
            </select>
            <button className='bg-[#525252] w-40 h-11 rounded-2xl text-white' onClick={()=>{handleCategoryFetch()}}>add</button>
          </div></>:null}

        <ul className='flex flex-row items-center justify-center gap-8 '>
            <li className='font-semibold relative h-10 flex items-center justify-center ' onMouseEnter={()=>{setIsCategory(true)}} onMouseLeave={()=>{setIsCategory(false)}}>
              {isCategory||isCategoryHover?<div className='category absolute z-30 top-10 -left-13 min-h-25 py-5 w-50 bg-main rounded-xl rounded-t-none flex items-center justify-center' onMouseEnter={()=>{setIsCategoryHover(true)}} onMouseLeave={()=>{setIsCategoryHover(false)}}>
                <ul className='flex flex-col items-center justify-center gap-4 w-full px-5'>
                  <li className='cursor-pointer w-full flex flex-row gap-2' onClick={()=>{setCategory("all")}}><div className='w-2 h-5 bg-gray-700'></div><h3 className='w-full text-left'>all</h3></li>
                  {categoryList?categoryList.map((e,i)=>{
                    return (<li key={e.id} id='e.id' className='cursor-pointer w-full flex flex-row gap-2' onClick={()=>{setCategory(e.categoryName)}}><div className={`w-2 h-5`} style={{backgroundColor: `${e.categoryColor}`}}></div><h3 className='w-full text-left'>{e.categoryName}</h3></li>)
                  }):null}
                  <li className='cursor-pointer w-full flex flex-row gap-2' onClick={()=>{setIsAdd(true)}}><div className='w-2 h-5 bg-gray-700'></div><h3 className='w-full text-left'>Add</h3></li>
                </ul>
              </div>:null}
              <h3 className='flex flex-row items-center justify-center hover:scale-105 hover:text-gray-300  transition duration-300 cursor-pointer' >Category<img src='/arrow.png' className='h-7'></img></h3>
            </li>
        </ul>

        <div className='w-20 flex flex-row items-center justify-end'><img src='/menu.png' className='h-6 hover:rotate-6 transition duration-200 cursor-pointer'></img></div>

    </nav>
  )
}

export default Nav