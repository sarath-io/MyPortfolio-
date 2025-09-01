"use client";

import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed w-full bg-background text-foreground shadow-md z-50' style={{backgroundColor:'#F8F8F8'}}>
        <div className='max-w-5xl mx-auto flex justify-between items-center px-6 py-4'>
            <h1 className='text-lg font-bold'>Sarath</h1>
            <ul className='flex gap-6'>
               <li><Link href="about">About</Link></li>
          <li><Link href="skills">Skills</Link></li>
          <li><Link href="projects">Projects</Link></li>
          <li><Link href="contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}
