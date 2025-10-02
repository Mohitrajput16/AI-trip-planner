import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import { useState } from 'react';
import { SoapDispenserDroplet } from 'lucide-react';
import { toast } from 'sonner';
import { AI_PROMPT } from '@/constants/options';
import { chatSession } from '@/service/AIModel';
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseconfig";

// import { db } from "./firebase"; 

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import { syncBuiltinESMExports } from 'module';



const CreateTrip = () => {

  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading,setLoading]=useState(false);

  const navigate=useNavigate();



  const handleInputChange = (name, value) => {
    if (name == 'noOfDays' && value > 5) {
      console.log(" enter  atmost 5")
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    })

  }

  useEffect(() => {
    console.log(formData);
  }, [formData])
  


  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => console.log("Login Failed:", error),
  })
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      OnGenerateTrip();
    })
  }
  // const GetUserProfile = (tokenInfo) => {
  //   axios
  //     .get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
  //       headers: {
  //         Authorization: `Bearer ${tokenInfo?.access_token}`,
  //         Accept: "application/json",
  //       },
  //     })
  //     .then((resp) => {
  //       console.log("User Profile:", resp.data)
  //       // Example: resp.data = { id, email, name, picture, ... }
  //     })
  //     .catch((err) => console.error("Error fetching profile:", err))
  // }


  const OnGenerateTrip = async () => {

    const user = localStorage.getItem('user');
    if (!user) {
      setOpenDialog(true)
      return;
    }

    if (formData.noOfDays > 5 && !formData?.location || !formData?.budget || !formData.traveler) {
      toast("please fill all Details ");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budg xet}', formData?.budget)

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    setLoading(false);
    console.log("--", result?.response?.text());
    SaveAiTrip(result?.response?.text())
  }
  
  const SaveAiTrip=async(TripData)=> {
    setLoading(true);
  const user = JSON.parse (localStorage.getItem('user'));
  const docId = Date.now().toString()
  await setDoc(doc(db, "AITrips", docId), {
    userSelection: formData,
    tripData: JSON.parse(TripData),
    userEmail:user?.email,
    id:docId
  });
  setLoading(false);
  navigate('/view-trip/'+docId)
  }
  return (
    <div className=' sm:px-10 md:px-32 lg:px-52 xl:px-72 px-5 mt-10  '>

      <h2 className='text-2xl font-bold '>Tell us About your preferences ✈️</h2>
      <p className='mt-3 text-gray-500 text-l'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences. </p>


      <div className='space-y-5 mt-10 '>

        <div className=' '>
          <h2 className='text-l my-3 font-medium' >What is your destination?</h2>
          <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location', v) }
            }} />
        </div>

        <div className=''>
          <label className='text-l my-3 font-medium ' >How many days are you planning your trip?</label>
          <Input type="number" placeholder="Enter number of days" className='mt-4'
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

      </div>

      <div className='space-y-5 mt-5 '>
        <div >
          <label className='text-l my-3 font-medium' >What is Your Budget?</label>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 rounded-lg cursor-pointer border ${formData?.budget == item.title && 'border-2  '}`}>
                <h2 className='text-3xl'>{item.icon}</h2>
                <h2 className='font-bold text-l'>{item.title}</h2>
                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='space-y-5 mt-5 '>
        <div >
          <label className='text-l my-3 font-medium' >Who do you plan to travel with?</label>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelList.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('traveler', item.people)}
                className={`p-4 border rounded-lg cursor-pointer  ${formData?.traveler == item.people && ' border-2'}`}>
                <h2 className='text-3xl'>{item.icon}</h2>
                <h2 className='font-bold text-l'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='flex my-10 justify-end pt-10 '>
        <Button 
        disabled={loading}
        onClick={OnGenerateTrip} className=' text-white px-5 py-2 rounded-lg hover:bg-blend-color-dodge '>
           {loading?<AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>:'Generate Trip' }
           </Button>
      </div>



      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="./logo.svg" alt="" />
              <h2 className='font-bold text-sm mt-5'>Sign In With Google </h2>
              <h2>Sign in to the App With Google Authentication Securely </h2>

              <Button 
              onClick={login} className='w-full mt-5 flex gap-4 itmes-center'><FcGoogle />Sign In With Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>


  )
}



export default CreateTrip
