import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div 
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div
            className='pb-8'>
                <p
                className='text-4xl font-bold inline-block border-b-4 border-gray-500'>
                    About
                </p>

            </div>
            <p
            className='text-xl mt-20'>
                I have extensive experience in HTML, CSS, JavaScript, bootstrap and various open-source
                 frameworks such as Angular, ReactJS, MySQL, .NET. I am skilled in the use of these frameworks
                  to develop web applications based on Single Page Applications (SPA) architectures. In addition
                   to my development work, I am skilled in troubleshooting problems and resolving bugs within an
                    existing system.
            </p>
            <br/>
            <p className='text-xl'>
            Technologies used: HTML, CSS, JavaScript, TypeScript, ReactJS, Redux, Angular, MySQL, Firebase, AzureDevops.
            </p>
        </div>
    </div>
  )
}

export default About