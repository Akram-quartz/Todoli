import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Todo from './Components/Todo'
import Add from './Components/Add';
import { getTodos } from './scripts/todo';
import { getCategories } from './scripts/category';
import Register from './Components/Register';
import { isLoged } from './scripts/register';


function App() {

  // variables

  const [todoList, setTodoList] = useState(null);
  const [currentCategory, setCategory] = useState("all");
  const [isRegistration, setIsRegistration] = useState(false);
  const [isHome, setIsHome] = useState(false) ;
  const [categoryList, setCategoryList] = useState(null)
  const [token, setToken] = useState(null) ;

  // check if user is loged in

  const checkLogin = async ()=>{
    let loginStatus = await isLoged();
    if (loginStatus){
      setIsHome(true)
    } else {
      return
    }
  }

  useEffect(()=>{
    checkLogin();
  },[])

  // get todos on startup

  const fetchTodos = async ()=>{
    let data = await getTodos()
    setTodoList(data)
  }

  // get categories

  const fetchCategories = async ()=>{
    let data = await getCategories()
    setCategoryList(data)
  }

  useEffect(()=>{
    if(isHome){
      fetchTodos()
      fetchCategories()
    }
  },[isHome])


  if (!isRegistration && isHome){
    return (
      <>
        <Nav setCategory={setCategory} currentCategory={currentCategory} fetchCategories={fetchCategories} categoryList={categoryList}></Nav>
        <div className=' w-full h-full mt-35 px-[10%] pb-10'>
          <div className=' w-full flex flex-col items-center gap-8'>
            {todoList&&categoryList?todoList.map((e,i)=>{
              if (currentCategory==="all"){
                return(<Todo text={e.text} color={categoryList.find(obj=>obj.categoryName===e.categoryName).categoryColor} completed={e.completed} todoId={e.id} fetchTodos={fetchTodos} key={e.id}></Todo>)
              } else if(currentCategory!="all"&&e.categoryName===currentCategory) {
                return(<Todo text={e.text} color={categoryList.find(obj=>obj.categoryName===e.categoryName).categoryColor} completed={e.completed} todoId={e.id} fetchTodos={fetchTodos} key={e.id}></Todo>)
              }
            }):null}
          </div>
        </div>
        <Add categoryList={categoryList} fetchTodos={fetchTodos}></Add>
      </>
    )
  } else if (isRegistration&&!isHome){
    return (
      <Register isRegistration={isRegistration} setIsRegistration={setIsRegistration} setIsHome={setIsHome} ></Register>
    )
  } else if (!isRegistration&&!isHome){
    return (
    <>
      <button onClick={()=>{setIsRegistration(true)}} className='bg-mauve-600 text-white h-11 w-25'>Sign up</button>
    </>)
  }
}

export default App