import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const CreateTrip = () => {
  return (
    <div className='sm:px-10 md:px-32 lg:px-52 xl:px-72 px-5 mt-10 '>

      <h2 className='text-3xl font-bold '>Tell us About your preferences </h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences. </p>
    

    <div className='space-y-5 mt-10 '>
      
        <div className=' '>
          <h2 className='text-xl my-3 font-medium' >What is your destination?</h2>
          <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}/>
        </div>

        <div className=''>
          <label className='text-xl my-3 font-medium ' >How many days are you planning your trip?</label>
          <Input type="number" placeholder="Enter number of days" className='mt-4' />
        </div>
      
    </div>

    <div className='space-y-5 mt-5 '>
      <div >
        <label className='text-xl my-3 font-medium' >What is Your Budget?</label>
        {/* add 3 cards named cheap, moderate, luxury with border and hover effect and small emoji */}
        <div className='flex gap-5 mt-5 '>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100  '>
            <span role="img" aria-label="cheap">💵</span> Cheap
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="moderate">🏷️</span> Moderate
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="luxury">💎</span> Luxury
          </div>
        </div>
      </div>
    </div>

    <div className='space-y-5 mt-5 '>
      <div className='space-y-2 '>
        <label className='text-xl my-3 font-medium' >Who do you plan on traveling with on your next adventure?</label>
        {/* // add 4 cards named solo, couple, family, friends with border and hover effect and small emoji */}
        <div className='flex gap-5 mt-5 '>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="solo">🧑‍🦱</span> Solo
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="couple">👩‍❤️‍👨</span> Couple
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="family">👨‍👩‍👧‍👦</span> Family
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="friends">👯‍♂️</span> Friends
          </div>

        </div>
    </div>

    </div>
    <div>
      <div className='mt-5'>
        <label className='text-xl my-3   font-medium' >What are your interests?</label>
        {/* // add 6 cards named adventure, culture, relaxation, nature, food, nightlife with border and hover effect and small emoji */}
        <div className='flex gap-5 mt-5 flex-wrap '>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="adventure">🧗‍♂️</span> Adventure
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="culture">🏛️</span> Culture
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="relaxation">🛀</span> Relaxation
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="nature">🌳</span> Nature
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="food">🍲</span> Food
          </div>
          <div className='border p-3 rounded-lg cursor-pointer hover:bg-gray-100 '>
            <span role="img" aria-label="nightlife">🌃</span> Nightlife
          </div>
        </div>
      </div>
    </div>

    <div className='text-center pt-10 '>
      <Button className=' text-white px-5 py-2 rounded-lg hover:bg-blue-600 '>Generate Trip</Button>
    </div>
    </div>
  )
}



export default CreateTrip
