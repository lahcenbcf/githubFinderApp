import React from 'react'
import {Link} from 'react-router-dom'
function UserItem({user}) {
  return (
    <div className='card shadow-md p-4 w-fit grid place-items-center m-3'>
    <div className='flex items-center justify-center gap-3'>
            <div className=' w-16 h-16'>
                <img src={user.avatar_url} alt={user.login} className='rounded-full' />
            </div>
            <div className='flex flex-col items-start'>
               <p className='text-[#fafbfc]'>{user.login}</p>
                <Link to={`/users/${user.login}`}>visit profile</Link>
            </div>
            
    </div>
    </div>
  
    )
}
export default UserItem