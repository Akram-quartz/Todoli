

const addCategory = async (name, color) => {

  // check if data exists

  if (!name){return};
  if (!color){return};

  let colorUp = color.toUpperCase();
  let nameUp = name.toLowerCase();

  // fetch function

  try {
    let response = await fetch('http://192.168.100.31:5173/category',{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        categoryColor: colorUp,
        categoryName: nameUp
      })
    });

    // check if response exists

    if(!response.ok){
      return
    };

    return response;

  } catch (error) {
    console.error(error)
  };
};


const getCategories = async ()=>{

  
  try {
    let response = await fetch('http://192.168.100.31:5173/category',{
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
        
    if (!response.ok){return};
    let responseData = await response.json();
    return responseData.data
        
  } catch (error) {
    console.error(error)
  };
};

export { addCategory, getCategories }