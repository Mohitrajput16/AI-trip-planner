import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapLocationDot } from "react-icons/fa6";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';



const HotelCardItem = ({hotel}) => {
     const [PhotoUrl,setPhotoUrl] = useState();
      useEffect(()=>{
        hotel&&GetPlaceImg();
      },[hotel])
    
      const GetPlaceImg=async()=>{
        const data={
          textQuery:hotel?.hotelName
        }
        const result= await GetPlaceDetails(data).then(resp=>{
          const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[1].name);
          setPhotoUrl(PhotoUrl);
         
        })
      }
  return (
    <div>
      <Link to={'https://www.google.com/maps/search/?api=1&query=lumen+field'+hotel.hotelName+","+hotel?.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer shadow-sm p-3 rounded-2xl'>
                <img src={PhotoUrl} alt="" className='rounded-xl h-[170px]   object-cover ' />

                <div className='my-2 flex flex-col gap-2 ' >
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>  
                    <h2 className='text-xs text-gray-500'><FaMapLocationDot className='inline-block mr-1'/> {hotel?.hotelAddress}</h2>  
                    <h2 className='text-sm'>💰{hotel?.price}</h2>  
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>  
                </div>
            </div>
            </Link>
    </div>
  )
}

export default HotelCardItem
