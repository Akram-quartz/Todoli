async function isLoged() {
  const res = await fetch("http://192.168.100.31:5173/auth/check", {
    method: "POST",
    credentials: "include"
  });

  if (!res.ok){
    console.log(res)
    return
  }

  const user = await res.json();

  return user.message;
}



async function register(name, email, password){

    // verify data

    if(!name||name.length<2){()=>{
        console.error("no username provided")
        return;
    }}

    if(!email||email.length<2){()=>{
        console.error("no email provided")
        return;
    }}

    if(!password||password.length<2){()=>{
        console.error("no password provided")
        return;
    }}

    try {
    let response = await fetch('http://192.168.100.31:5173/auth/register',{
      method: 'POST',
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    });

    // check if response exists

    if(!response.ok){
      return
    };

    // assign user token

    

    // assign data to variable

    let dataObject = await response.json();

    return(dataObject);

    // handle error 

  } catch (error) {
    console.error(error)
  };
}

async function login(email, password){

    // verify data

    if(!email||email.length<2){()=>{
        console.error("no email provided")
        return;
    }}

    if(!password||password.length<2){()=>{
        console.error("no password provided")
        return;
    }}

    try {
    let response = await fetch('http://192.168.100.31:5173/auth/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email,
        password
      }
    });

    // check if response exists

    if(!response.ok){
      return
    };

    

    // assign data to variable

    let dataObject = await response.json();

    return(dataObject);

    // handle error 

  } catch (error) {
    console.error(error)
  };
}

export {register, login, isLoged}