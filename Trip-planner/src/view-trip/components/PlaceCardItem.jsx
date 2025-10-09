import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'

const PlaceCardItem = ({place}) => {
   const [PhotoUrl,setPhotoUrl] = useState();
        useEffect(()=>{
          place&&GetPlaceImg();
        },[place])
      
        const GetPlaceImg=async()=>{
          const data={
            textQuery:place.placeName
          }
          const result= await GetPlaceDetails(data).then(resp=>{
            const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[1].name);
            setPhotoUrl(PhotoUrl);
           
          })
        }
  return (
    <div className='shadow-sm rounded-2xl p-3 mt-2 flex gap-5  
    hover:scale-105 transition-all'>
      <img src={PhotoUrl?PhotoUrl:'/Gemini_cover.png'} alt="" className='h-[130px] w-[130px] rounded-xl object-cover' />
      <div>
        <h2 className='font-bold text-lg '>{place.placeName}</h2>
        <p className='text-sm text-gray-400 '>{place.placeDetails}</p>
        <p className='text-sm text-gray-700 mt-2'>⭐{place.rating}</p>
      </div>
    </div>
  )
}

export default PlaceCardItem
