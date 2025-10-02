import React from 'react'
import PlaceCardItem from './PlaceCardItem'

const PlacesToVisit = ({trip}) => {
  return (
    <div>
      <h2 className='font-bold text-2xl mt-5 mb-5'>Places To Visit</h2>

      <div>
        {trip.tripData?.itinerary.map((item,index)=>(
            <div>
                <h2 className='font-medium text-lg'>Day {item.day}</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                {item.plan.map((place,index)=>(
                    <div>
                        <h2 className='font-medium text-sm text-orange-400'>{place.time}</h2>      
                            <PlaceCardItem place={place}/>
                     </div>
                ))}
                </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
