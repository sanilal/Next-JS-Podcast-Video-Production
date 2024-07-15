import BookNow from '@/components/BookNow'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container flex m-auto justify-center pt-8 z-1 text-white">
        <Services />
      </div>
      <div className="flex m-auto justify-center pt-8 z-1 text-white">
        <BookNow />
      </div>
    </div>
    
  )
}

export default page