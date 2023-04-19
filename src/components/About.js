import React from 'react'
import flyingbird from '../assets/flyingbird.gif'

const About = () => {
  return (
    <div name='about' className='w-full h-[500px] bg-black text-gray-300 '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-400'>About</p>
                </div>
                <div className='px-5'>
                    <img src={flyingbird} alt='pic' className='w-20 h-20' />
                </div>
            </div>
            <div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p >Hi👋, this is Akshay Nair</p>
                </div>
                <div className='sm:text-right'>
                    <p >I am a passionate software engineer graduated in 2019, I am interested in making 
                        career in full stack development, I am always excited in building things up and always curious 
                        about things around and it's working. Do checkout my projects
                    </p>
                </div>
            </div>

            </div>
            

        </div>
    </div>
  )
}

export default About