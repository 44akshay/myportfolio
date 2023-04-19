import React, { useState } from 'react'
import MyText from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter";
import myimg from '../assets/myimg.jpg'
import {Link} from "react-scroll"
const Home = () => {
    
    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
      };

    const [btnText,setbtnText]=useState("😉");
  return (
    
    <div name='home' className='w-full h-screen flex-col sm:flex sm:flex-row bg-black md:px-40'>
        <div className='max-w-full px-40  h-full flex flex-col justify-center'>
            <p className='text-pink-400 text-3xl font-bold '> Hi there👋, </p>
            <h1 className='text-4xl sm:text-5xl text-[#ccd6f6]'>Welcome you all,</h1>
            <span className=" text-white text- inline-flex text-xl sm:text-2xl py-8" >
            <MyText
            options={{
                strings: ['I ❤️ Java!','I ❤️ Javascript!', 'I ❤️ Full Stack!'],
                pauseFor:2500,
                autoStart: true,
                loop: true,
                cursor:"|",
                skipAddStyles:false,
                stringSplitter
            }} />
            </span>
            
          
        <Link  to="contact" smooth={true} duration={500} >
            <button onMouseOver={()=>setbtnText("😍")} onMouseLeave={()=>setbtnText("😉")} className='text-yellow-200 rounded-full hover:bg-yellow-400 hover:text-white border-2 w-fit p-3'>Let's have a cofee {btnText} </button>

            </Link>
        </div>
        <div className=' w-[100px] mx-auto sm:hidden'>
            <img src={myimg} alt='myimage' className='my-auto' />
        </div>
        <div className='hidden lg:flex w-[200px] '>
            <img src={myimg} alt='myimage' className='my-auto' />
        </div>
    </div>
  )
}

export default Home