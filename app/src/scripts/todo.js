
// fetch todos for the user

const getTodos = async ()=>{

  // fetch function

  try {
    let response = await fetch('http://192.168.100.31:5173/todoit',{
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // check if response exists
    
    if(!response.ok){
      return
    };

    

    // assign data to variable

    let dataObject = await response.json();

    console.log(dataObject)

    return(dataObject.data);

    // handle error 

  } catch (error) {
    console.error(error)
  };
};


const addTodo = async ( name, textArea, categoryId, fetchTodos )=>{

  // check if text exists

  if (!name){return};

  // add function text, categoryName, completed, categoryId, image

  try {
    let response = await fetch('http://192.168.100.31:5173/todoit',{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: textArea,
        categoryName: name,
        completed: false,
        categoryId: categoryId
      })
    });

    console.log('hello')

    // check if response exists

    if(!response.ok){
      return
    };

    fetchTodos();
  } catch (error) {
    console.error(error)
  };
}

const deleteTodo = async ( todo, fetchTodos )=>{

  // check if info exists

  if (!todo){return};

  console.log(todo.target)

  // add function text, categoryName, completed, categoryId, image

  try {
    let response = await fetch(`http://192.168.100.31:5173/todoit/${todo.target.id}`,{
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('hello')

    // check if response exists

    if(!response.ok){
      return
    };

    fetchTodos()

    fetchTodos();
  } catch (error) {
    console.error(error)
  };
}

export {getTodos, addTodo, deleteTodo}