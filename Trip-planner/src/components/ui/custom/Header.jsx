import React from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className='p-2  shadow-sm flex justify-between items-center px-5  '>
      <img src="/logo.svg" alt="Logo" className='h-8 w-50' />
      <div>
        <Button className='h-8 w-20'>Sign In</Button>
      </div>
      
    </div>
  )
}

export default Header
