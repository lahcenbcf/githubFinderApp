import React from 'react'
import "./about.css"
import {AiOutlineCamera} from "react-icons/ai"
import {IoMdFitness} from "react-icons/io"
import {BsFillAirplaneEnginesFill} from "react-icons/bs"
import {MdWork} from 'react-icons/md'
import myImage from "../../assets/myImage.jpg"
function About() {
  const iconColor='#2b3137'
  return (
    <div className='container mt-10'>
    <div className='wrapper w-full mx-auto flex flex-col-reverse md:flex-row md:w-5/6 md: items-start justify-center gap-10 p-10 relative overflow-visible'>
    <h1 className="absolute text-8xl bottom-[50%] translate-x-20 translate-y-[-100%] rotate-90 z-10 text-[#2dba4e] font-bold right-[5%] md:bottom-[-5%] md:rotate-0 md:translate-x-0">ABOUT ME</h1>
    <div className='left flex flex-col items-start md:w-[50%]'>
    <div className='icons flex items-center mb-8 gap-4'>
      <AiOutlineCamera size={30} color={iconColor} />
      <IoMdFitness size={30} color={iconColor}/>
      <BsFillAirplaneEnginesFill size={30} color={iconColor} />
      <MdWork size={30} color={iconColor} />
      <h2 className='myInterests text-[#2b3137] text-3xl'>My Interests</h2>
    </div>
    <h1 className='text-[#24292e] text-4xl font-bold'>Hassane BENCHAREF</h1>
    <h3 className=' text-[#2dba4e] text-2xl mt-2 font-semibold'>Full Stack Web Developer</h3>
    <p className='mt-4 mb-4 text-gray-800 text-sm font-semibold'>A full stack web developer is a software developer who can build and maintain both the front-end and back-end of a website. The front-end is the part of the website that users see and interact with, while the back-end is the part that handles the data and logic of the website.

    A full stack web developer typically needs to have skills in the following areas:
    
    Front-end development: HTML, CSS, JavaScript, React, Angular, Vue.js
    Back-end development: PHP, Python, Java, Ruby on Rails, Node.js
    Databases: MySQL, PostgreSQL, MongoDB</p>
</div>
<div className='right w-full md:w-[40%] mx-auto mb-6'>

<div className="imageWrapper">
<img src={myImage} />
</div>



</div>
    </div>    
    
    </div>
  )
}

export default About