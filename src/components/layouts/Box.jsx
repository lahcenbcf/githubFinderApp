import React from 'react'

function Box({text}) {
  return (
    <div className={`h-10 text-2xl flex justify-center items-center rounded-sm p-2 bg-[#24292e] text-[#2dba4e] font-semibold`}>{
text
    }</div>
  )
}

export default Box