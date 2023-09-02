import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function ErrorPage() {
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center gap-10'>
    <h1 className='text-8xl font-bold text-white'>Page not Found 404</h1>
    <Link to="/" className="text-[#fafbfc] p-3 bg-[#2dba4e] rounded-md flex items-center gap-4 text-2xl"><AiOutlineHome /> Back To Home</Link>
    </div>
  )
}
export default ErrorPage