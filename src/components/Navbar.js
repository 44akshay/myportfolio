import React, { useState } from 'react'
import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'
import newlogo from '../assets/newlogo.gif'
import {Link} from "react-scroll"

const Navbar = () => {
    const [ham,setham]=useState(false);
    const handleClick= ()=>{
        setham(!ham);

    };
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-black font-bold text-gray-300'>
        {/**Here comes the logo */}
        <div>
        <img alt='logo' src={newlogo} className="w-30 h-20 cursor-pointer"/>
        </div>
        {/**Here comes the menu */}
        <div>
            <ul className='hidden md:flex'>
                <li><Link  to="home" smooth={true} duration={500} >
          Home
        </Link></  li>
                <li><Link  to="about" smooth={true} duration={500} >
          About
        </Link></li>
                <li><Link  to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
                <li><Link  to="projects" smooth={true} duration={500} >
          Projects
        </Link></li>
                <li><Link  to="contact" smooth={true} duration={500} >
          Contact me
        </Link></li>
            </ul>
        </div>
            

        {/**Hamburger menu */}
        <div className='z-10 md:hidden cursor-pointer ' onClick={handleClick}>
            {!ham?<FaBars/>:<FaTimes/>}
        </div>

        {/**Mobile menu */}
        <div className={!ham?"hidden":'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center sm:hidden'}>
        <ul>
                <li className='py-6 text-4xl'><Link  to="home" smooth={true} duration={500} onClick={()=>handleClick()} >
          Home
        </Link></li>
                <li className='py-6 text-4xl'><Link  to="about" smooth={true} duration={500} onClick={()=>handleClick()} >
          About
        </Link></li>
                <li className='py-6 text-4xl'><Link  to="skills" smooth={true} duration={500} onClick={()=>handleClick()}>
          Skills
        </Link></li>
                <li className='py-6 text-4xl'><Link  to="projects" smooth={true} duration={500} onClick={()=>handleClick()} >
          Projects
        </Link></li>
                <li className='py-6 text-4xl'><Link  to="contact" smooth={true} duration={500} onClick={()=>handleClick()} >
          Contact me
        </Link></li>
            </ul>
        </div>
        
        {/**Social icons */}
        <div className='hidden flex lg:block fixed flex-col top-[50%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex items-center  ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-800 text-white'>
                <a className='flex  justify-between items-center content-center w-full' href='/'>Linkedin <FaLinkedin size={40}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-gray-800 text-white'>
                <a className='flex  justify-between items-center content-center w-full' href='/'>Github <FaGithub size={40}/></a>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar