import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className='w-full px-[10%]'>
        <div className='grid grid-cols-2 place-items-center min-h-[100vh]'>
            <div>
                <h3 className='text-4xl'>👋</h3>
                <h1 className='text-primary'>Hi! I&#39;m Krishna</h1>
                <h3 className='text-secondry'>AI Research Engineer | Full Stack Developer</h3>
            </div>
            <div className='grid'>
                  <Image
                  className="bg-transparent"
                  src="./loading.svg"
                  alt="icon"
                  width={200}
                  height={100}
                  priority
                />
            </div>
        </div>
    </div>
  )
}
