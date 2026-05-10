import React, { useState } from 'react'
import { register } from '../scripts/register'


function Register({isRegistration ,setIsRegistration, setIsHome}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async ()=>{
        const res = await register(name, email, password);
        if(!res){return}
        if (res.status==="success"){
            setIsHome(true)
            setIsRegistration(false)
        }else{return}
    }


  return (
    <div className='w-full h-dvh flex items-center justify-center bg-main overflow-hidden'>
        <div className='w-9/12 h-9/12 min-h-120 bg-[#202020] rounded-4xl overflow-hidden flex flex-row'>
            <div className='w-1/2 h-full hidden sm:block bg-[#262626] text-center pt-[10%] text-2xl text-white font-bold font-poppins'>{isRegistration?"Sign up":"Login"}</div>
            <div className='w-full sm:w-1/2 h-full flex flex-col items-center justify-center gap-[2%] text-white px-[10%] sm:px-[5%] '>
                <h1 className='self-start'>Name :</h1>
                <input value={name} onChange={e=>setName(e.target.value)} className='border-2 outline-0 border-[#4e4e4e] hover:border-[#686868] bg-[#262626] h-12 w-full pl-5 rounded-sm' placeholder='username'></input>
                <h1 className='self-start'>Email :</h1>
                <input value={email} onChange={e=>setEmail(e.target.value)} type='email' className='border-2 outline-0 border-[#4e4e4e] hover:border-[#686868] bg-[#262626] h-12 w-full pl-5 rounded-sm' placeholder='email'></input>
                <h1 className='self-start'>Password :</h1>
                <input value={password} onChange={e=>setPassword(e.target.value)} type='password' className='border-2 outline-0 border-[#4e4e4e] hover:border-[#686868] bg-[#262626] h-12 w-full pl-5 rounded-sm' placeholder='password'></input>
                <button className='bg-[#383838] h-12 w-30 self-start mt-2 rounded-lg hover:bg-[#303030] transition duration-200' onClick={()=>{handleRegister()}}>{isRegistration?"Sign up":"Login"}</button>
            </div>
        </div>
    </div>
  )
}

export default Register