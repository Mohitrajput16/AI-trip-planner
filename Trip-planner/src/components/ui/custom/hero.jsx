import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-20 gap-6 px-5'>
      <h2 className='font-bold text-[50px] text-center'><span className='text-[#f56551]'>Discover Your Next Adventure with AI :</span> Personalized Travel Recommendations</h2>
      <p className='text-xl text-gray-500 text-center'>Let us help you find the perfect destination tailored to your preferences and interests.</p>
      <Link to ='/create-trip'>
      <Button >Get Started</Button>
      </Link>
      <img src="/landing2.png" alt="" className='mt-20 mb-10 h-120 w-250' />
    </div>
  )
}

export default Hero
