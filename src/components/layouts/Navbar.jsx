import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
function Navbar({title}) {
  return (
    <nav className='navbar z-10 bg-[#24292e] shadow-md h-10 text-[#fafbfc]'>
        <div className='container mx-auto flex justify-between'>

            <div className=' flex gap-3 items-center'>
            <AiFillGithub size={30} />
            <Link to="/about"><h1 className='text-[#fafbfc] font-bold shadow-sm'>{title}</h1></Link>
            </div>
            

            <div className='nav-items flex items-center'>
                <Link to="/" className='btn btn-ghost btn-sm rounded-btn font-bold px-2 text-[#fafbfc]'>Home</Link>
                <Link to="/about" className='btn btn-ghost btn-sm rounded-btn font-bold px-2 text-[#fafbfc]'>About</Link>
                <Link to="/contact" className='btn btn-ghost btn-sm rounded-btn font-bold px-2 text-[#fafbfc]'>Contact</Link>
        </div>
        </div>
        
    </nav>
  )
}
Navbar.defaultProps={
    title:"github Finder"
}

export default Navbar