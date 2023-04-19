import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import git from '../assets/git.png'
import java from '../assets/java.png'
import spring from '../assets/spring.png'
import mysql from '../assets/mysql.png'




const Skills = () => {
  return (
    <div name='skills' className='bg-black text-gray-300 h-auto'>
        {/**Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500'>
                <img src={html} className="w-20 mx-auto  " alt='html icon' />
                <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500'>
                <img src={css} className="w-20 mx-auto  " alt='html icon' />
                <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500'>
                <img src={javascript} className="w-20 mx-auto  " alt='html icon' />
                <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500'>
                <img src={react} className="w-20 mx-auto " alt='html icon' />
                <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500'>
                <img src={git} className="w-20 mx-auto " alt='html icon' />
                <p className='my-4'>GIT</p>
                </div>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500'>
                <img src={java} className="w-20 mx-auto  " alt='html icon' />
                <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md shadow-gray-700 cursor-pointer hover:scale-110 duration-500 '>
                <img src={spring} className="w-20 mx-auto " alt='html icon' />
                <p className='my-4'>Spring</p>
                </div>
                <div className='shadow-md shadow-gray-700'>
                <img src={mysql} className="w-20 mx-auto cursor-pointer hover:scale-110 duration-500" alt='html icon' />
                <p className='my-4'>MYSQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills