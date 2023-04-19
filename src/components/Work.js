import React from 'react'
import amazon from '../assets/amazon.png'
import html from "../assets/html.png"
import facebook from "../assets/facebook.png"

const Work = () => {
  return (
    <div name='projects' className='bg-black w-full  text-gray-300 md:h-screen ' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Projects</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${facebook})`}} className="content-div">
                <div  className='shadow-lg shadow-gray-500 group rounded-md container flex justify-center items-center mx-auto content-div'>
                    {/**Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white '>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-3 m-2 bg-white text-gray-500 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-3 m-2 bg-white text-gray-500 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${amazon})`}} className="content-div">
                <div  className='shadow-lg shadow-gray-500 group rounded-md container flex justify-center items-center mx-auto content-div'>
                    {/**Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white '>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-3 m-2 bg-white text-gray-500 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-3 m-2 bg-white text-gray-500 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Work