import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapLocationDot } from "react-icons/fa6";
const Hotels =({trip}) => {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5 mb-5'>Hotel Recommendation</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 '>
        {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
            <Link to={'https://www.google.com/maps/search/?api=1&query=lumen+field'+hotel.hotelName+","+hotel?.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer shadow-sm p-3 rounded-2xl'>
                <img src="/Gemini_cover.png" alt="" className='rounded-xl ' />

                <div className='my-2 flex flex-col gap-2 ' >
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>  
                    <h2 className='text-xs text-gray-500'><FaMapLocationDot className='inline-block mr-1'/> {hotel?.hotelAddress}</h2>  
                    <h2 className='text-sm'>💰{hotel?.price}</h2>  
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>  
                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Hotels
