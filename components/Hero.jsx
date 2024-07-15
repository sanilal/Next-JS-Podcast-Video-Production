import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import HeroImage from "@/public/assets/final-studio-bg .png"
import Logo from './Logo'

const Hero = () => {
  return (
    <div>
        <div className="absolute z-0 w-full">
            <Image 
            src={HeroImage} 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            alt=""
            />
            <h1>Podcast & Video 
            Production</h1>
            <button>
            Book Now
            </button>

        </div>
        <Navbar />
        <Logo />
    </div>
  )
}

export default Hero