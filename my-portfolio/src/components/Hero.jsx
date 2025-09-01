import React from 'react'

export default function Hero() {
  return (
    // 
    <section id="hero" className='h-screen flex flex-col jsutify-center items-center text-center bg-gradient-to-br from-background to-stone-200 dark:from-background dark:to-stone-500'>
        <h1 className='text-5xl md:text-6xl font-bold text-stone-700'>
            Hello, I'm <span className='text-stone-500'>Sarath Chandra</span>
        </h1>
        <p className='text-xl md:text-2xl mt-4 max-w-2xl text-foreground'>Full Stack Developer | Java | Spring Boot | React | Next.js</p>
        <a href="projects" className='mt-8 px-6 py-3 bg-stone-600 text-white rounded-lg shadow-lg hover:bg-stone-700 transition'>View my work</a>
    </section>
  )
}
