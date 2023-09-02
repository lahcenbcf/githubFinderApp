import React, { useEffect} from 'react'
import UserItem from '../UserItem/UserItem'
import spinner from "../../assets/Spinner.gif"
import {Context} from '../../context/githubContext'
import { useContext } from 'react'
import Usersearch from './Userseach'
function UserList() {
   
    const {state:{users,isLoading}}=useContext(Context)
    /*useEffect(()=>{
        fetchUsers()
    },[])*/
    return(
<div>
<Usersearch />
    {!isLoading ?
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>{
             users.map((user)=>(
                <UserItem key={user.id} user={user} />
             ))   
            }</div>
          
   :<img className='w-[40px] h-[40px] rounded-full' src={spinner} alt='loading' />}
</div>)
        }

export default UserList