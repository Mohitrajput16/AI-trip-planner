import React from 'react'

const PlaceCardItem = ({place}) => {
  return (
    <div className='shadow-sm rounded-2xl p-3 mt-2 flex gap-5  
    hover:scale-105 transition-all'>
      <img src="/Gemini_cover.png" alt="" className='h-[130px] w-[130px] rounded-xl' />
      <div>
        <h2 className='font-bold text-lg '>{place.placeName}</h2>
        <p className='text-sm text-gray-400 '>{place.placeDetails}</p>
        <p className='text-sm text-gray-700 mt-2'>⭐{place.rating}</p>
      </div>
    </div>
  )
}

export default PlaceCardItem
