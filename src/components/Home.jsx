import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import heroImage from '../assets/heroImage.jpeg'

const Home = () => {
    return (
        <div
            name="home"
            className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center 
                    justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a full stack Web Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have extensive experience in HTML, CSS, JavaScript, bootstrap and various open-source frameworks such as Angular, ReactJS, MySQL, .NET. I am skilled in the use of these frameworks to develop web applications based on Single Page Applications (SPA) architectures. In addition to my development work, I am skilled in troubleshooting problems and resolving bugs within an existing system.
                        Technologies used: HTML, CSS, JavaScript, TypeScript, ReactJS, Redux, Angular, MySQL, Firebase, AzureDevops.
                    </p>
                    <div> 
                        <button className='group text-white w-fit px-6
                        py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:roatate-90 duration-300 ml-1'>
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={heroImage}
                        alt='my profile'
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home