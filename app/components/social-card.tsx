import React from 'react'

interface socialProps {
    children: React.ReactNode;
    className?: string;
}


export default function SocialCard({children, className}: socialProps) {
  return (
    <div className={`${className} flex items-center gap-7 w-full md:w-[500px] border border-purple-800 py-5 px-4 rounded-md shadow-md shadow-purple-800/50 hover:scale-110 transition-all ease-in-out duration-300`}>
        {children}
    </div>
  )
}
