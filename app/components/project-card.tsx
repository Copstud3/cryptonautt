import React from 'react'

interface Props {
  title: string;
  description: string;
}

export default function ProjectCard({title, description}: Props) {
  return (
    <div className='md:w-[400px] h-[300px] bg-[#1e232d]/30 border border-purple-900 rounded-md flex flex-col py-5 px-5 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer shadow-lg shadow-purple-800/50 font-inter'>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}
