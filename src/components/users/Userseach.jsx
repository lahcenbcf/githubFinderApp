import React, { useContext,useRef } from 'react'
import {Context} from '../../context/githubContext'
import { AlertContext } from '../../context/AlertContext';
import Alert from '../layouts/Alert';
function Usersearch() {
    const searchInput=useRef();
    const {submitBtn,state:{users},clearUsers}=useContext(Context)
    const {showMessage,clearMessage,state}=useContext(AlertContext)
    const submit=(e)=>{
        e.preventDefault()
        if(!searchInput.current.value) return showMessage("your field is empty !!");
        if(state?.alertMessage) clearMessage()
        submitBtn(searchInput.current.value);
        searchInput.current.value=""
    }
  return (
    <div className='my-10 w-full'>
    
        <Alert />   
   
    
    <div className='flex flex-col justify-center items-start md:flex-row md:items-center md:justify-center gap-6'>
    <form className=' w-2/4 relative h-8' onSubmit={submit}>
            <input ref={searchInput} type='text' placeholder='search' className='bg-gray-500 rounded-md w-full h-full px-4 outline-none'/>
            <button type='submit' className='absolute right-0 top-0 bottom-0 rounded-md rounded-l-none px-4 bg-[#2dba4e]' >Go</button>
        </form>
        {
            users.length ? <button className='btn py-0 px-2 text-sm' onClick={clearUsers}>clear</button> : null
        }
        
    </div>
    </div>
  )
}

export default Usersearch