import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import HeroImage from "@/public/assets/final-studio-bg.webp"
import Logo from './Logo'

const Hero = () => {
  return (
    <div className="relative z-0 w-full h-[100vh]">
            <Logo />
            <Image 
            src={HeroImage} 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100vh' }} 
            alt=""
            className="absolute top-0 z-0 object-fit" 
            />
            <div className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                <h1 className="text-white text-3xl">Podcast & Video 
                Production</h1>
                <button className="text-white bg-primary px-10 py-3 rounded-3xl text-sm mt-4">
                Book Now
                </button>
            </div>
            

        {/* <Navbar /> */}
        
    </div>
  )
}

export default Hero