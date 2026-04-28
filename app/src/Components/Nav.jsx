import React from 'react'
import { useState } from 'react'

function Nav({setCategory, category}) {

  const [isCategory, setIsCategory] = useState(false)
  const [isCategoryHover, setIsCategoryHover] = useState(false)

  return (
    <nav className={`nav text-white w-11/12 h-15 absolute top-8 rounded-4xl flex flex-row items-center justify-between px-[5%]`}>
        <div className='w-20 flex flex-row items-center justify-start gap-2'>
          <img src='/logo.png' className='h-6'></img>
          <h1 className='font-semibold hidden md:block'>Todoit</h1>
        </div>
        <ul className='hidden md:flex flex-row items-center justify-center gap-8 '>
            <li className='font-semibold hover:scale-105 hover:text-gray-300 transition duration-300'><a href="">Text</a></li>
            <li className='font-semibold hover:scale-105 hover:text-gray-300 transition duration-300'><a href="">Image</a></li>
            <li className='font-semibold relative h-10 flex items-center justify-center ' onMouseEnter={()=>{setIsCategory(true)}} onMouseLeave={()=>{setIsCategory(false)}}>
              {isCategory||isCategoryHover?<div className='category absolute z-30 top-10 -left-13 min-h-50 py-5 w-50 bg-main rounded-xl rounded-t-none flex items-center justify-center' onMouseEnter={()=>{setIsCategoryHover(true)}} onMouseLeave={()=>{setIsCategoryHover(false)}}>
                <ul className='flex flex-col items-center justify-center gap-4 w-full px-5'>
                  <li className='w-full flex flex-row gap-2' onClick={()=>{setCategory("all")}}><div className='w-2 h-5 bg-gray-500'></div><h3 href="" className='w-full text-left'>All</h3></li>
                  <li className='w-full flex flex-row gap-2' onClick={()=>{setCategory("bg-red-300")}}><div className='w-2 h-5 bg-white'></div><h3 href="" className='w-full text-left font-semibold'>University</h3></li>
                  <li className='w-full flex flex-row gap-2' onClick={()=>{setCategory("all")}}><div className='w-2 h-5 bg-red-500'></div><h3 href="" className='w-full text-left font-semibold'>Work</h3></li>
                  <li className='w-full flex flex-row gap-2' onClick={()=>{setCategory("bg-green-300")}}><div className='w-2 h-5 bg-green-700'></div><h3 href="" className='w-full text-left font-semibold'>Self dev</h3></li>
                  <li className='w-full flex flex-row gap-2'><div className='w-2 h-5'></div><h3 href="" className='w-full text-left'>Add</h3></li>
                </ul>
              </div>:null}
              <h3 href="" className='flex flex-row items-center justify-center hover:scale-105 hover:text-gray-300  transition duration-300' ><h1>Category</h1><img src='/arrow.png' className='h-7'></img></h3>
            </li>
        </ul>
        <ul className='flex md:hidden flex-row items-center justify-center gap-5'>
            <li><span class="material-symbols-outlined">list_alt</span></li>
            <li><span class="material-symbols-outlined">art_track</span></li>
            <li className='relative h-10 flex items-center justify-center' onMouseEnter={()=>{setIsCategory(true)}} onMouseLeave={()=>{setIsCategory(false)}}>
              {isCategory||isCategoryHover?<div className='category absolute z-30 top-10 -left-13 min-h-50 py-5 w-40 bg-main rounded-2xl rounded-t-none flex items-center justify-center' onMouseEnter={()=>{setIsCategoryHover(true)}} onMouseLeave={()=>{setIsCategoryHover(false)}}>
                <ul className='flex flex-col items-center justify-center gap-4 w-full px-5'>
                  <li className='w-full flex flex-row gap-2'><div className='w-2 h-5 bg-gray-500'></div><h3 href="" className='w-full text-left'>All</h3></li>
                  <li className='w-full flex flex-row gap-2'><div className='w-2 h-5 bg-white'></div><h3 href="" className='w-full text-left'>University</h3></li>
                  <li className='w-full flex flex-row gap-2'><div className='w-2 h-5 bg-red-500'></div><h3 href="" className='w-full text-left'>Work</h3></li>
                  <li className='w-full flex flex-row gap-2'><div className='w-2 h-5 bg-green-700'></div><h3 href="" className='w-full text-left'>Self dev</h3></li>
                  <li className='w-full flex flex-row gap-2'><div className='w-2 h-5'></div><h3 href="" className='w-full text-left'>Add</h3></li>
                </ul>
              </div>:null}
              <h3 href="" className='flex flex-row items-center justify-center'><span className="material-symbols-outlined text-xl!">format_align_center</span><img src='/arrow.png' className='h-7 hidden md:block'></img></h3>
            </li>
        </ul>
        <div className='w-20 flex flex-row items-center justify-end'><img src='/menu.png' className='h-6 hover:rotate-6 transition duration-200 cursor-pointer'></img></div>
    </nav>
  )
}

export default Nav