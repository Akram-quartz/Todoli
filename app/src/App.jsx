import React, { useState } from 'react'
import Nav from './Components/Nav'
import Todo from './Components/Todo'
import Add from './Components/Add';

const testList = [
  { color: "bg-red-300", text: "Buy groceries" },
  { color: "bg-blue-300", text: "Finish homework" },
  { color: "bg-green-300", text: "Clean the room" },
  { color: "bg-yellow-300", text: "Call mom" },
  { color: "bg-green-300", text: "Read a book" },
  { color: "bg-pink-300", text: "Go for a walk" },
  { color: "bg-indigo-300", text: "Write a blog post" },
  { color: "bg-teal-300", text: "Practice coding" },
  { color: "bg-orange-300", text: "Cook dinner" },
  { color: "bg-lime-300", text: "Exercise for 30 minutes" },
  { color: "bg-amber-300", text: "Plan the week" },
  { color: "bg-cyan-300", text: "Reply to emails" },
  { color: "bg-emerald-300", text: "Organize workspace" },
  { color: "bg-fuchsia-300", text: "Watch a tutorial" },
  { color: "bg-green-300", text: "Meditate for 10 minutes" },
  { color: "bg-sky-300", text: "Backup files" },
  { color: "bg-violet-300", text: "Update resume" },
  { color: "bg-stone-300", text: "Do laundry" },
  { color: "bg-neutral-300", text: "Fix bugs in project" },
  { color: "bg-green-300", text: "Review notes" },
  { color: "bg-gray-300", text: "Schedule appointments" },
  { color: "bg-slate-300", text: "Learn a new skill" },
  { color: "bg-red-200", text: "Drink more water" },
  { color: "bg-blue-200", text: "Stretch بدن" },
  { color: "bg-green-300", text: "Sleep early" }
];


function App() {

  const [category, setCategory] = useState("all")

  return (
    <>
      <Nav setCategory={setCategory} category={category}></Nav>
      <div className=' w-full h-full mt-35 px-[10%] pb-10'>
        <div className=' w-full flex flex-col items-center gap-8'>

          {testList.map((e)=>{
            if (category==="all"){
              return(<Todo text={e.text} color={e.color}></Todo>)
            } else if(category!="all"&&e.color===category) {
              return(<Todo text={e.text} color={e.color}></Todo>)
            }
          })}
        </div>
      </div>
      <Add></Add>
    </>
  )
}

export default App