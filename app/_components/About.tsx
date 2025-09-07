import Image from 'next/image';
import React from 'react';
import Typing from './Typing';

export default function About() {
  const words = [ "AI Research Engineer", "Full Stack Developer" ];
  return (
    <div className='flex flex-col justify-center items-center gap-8 min-h-screen'>
      
      <div className=''>
        <div className='min-h-[100vh] flex flex-col justify-center items-center gap-4 px-4 text-center'>
          <h3 className='text-4xl'>👋</h3>
          <h1 className='text-primary'>Hi! I&#39;m Krishna</h1>
          <h3 className='text-secondry'>< Typing words = {words} /></h3>
        </div>
      </div>
      {/* <Image
        className="bg-transparent"
        src="./loading.svg"
        alt="icon"
        width={200}
        height={100}
        priority
      /> */}
    </div>
  )
}
