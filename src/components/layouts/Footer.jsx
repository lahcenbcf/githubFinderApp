import React from 'react'

function Footer() {
    const currentDate=new Date();
  return (
    <div className='footer bg-[#24292e] shadow-md p-5 absolute bottom-0'>
        <p className='text-[#fafbfc] text-center font-bold '>CopyRights &copy; All Rights are reserved</p>
    </div>
  )
}

export default Footer