import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips,setUserTrips]=useState([]);

  useEffect(() => {
    GetUserTrips();
  }, [])

  const GetUserTrips =async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigation('/');
      return;
    }
    const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email));
    const querySnashot=await getDocs(q);
    querySnashot.forEach((doc)=>{
      console.log(doc.id,"=>",doc.data());
      setUserTrips(prevVal=>[...prevVal,doc.data()])
    });
  }
  return (
    <div className='sm:px-10 md:px-32 lg:px-52 xl:px-72 px-5 mt-12'>
      <h2 className='font-bold text-3xl  '>My trips</h2>

      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
        {userTrips?.length>0?userTrips.map((trip,index)=>(
          <UserTripCardItem trip={trip} key={index} />
        ))
      :[1,2,3,4,5,6].map((item,index)=>{
        <div key={index} className='h-[220px] w-full bg-slate-400 animate-pulse rounded-xl'>

        </div>
      })}
      </div>
    </div>
  )
}

export default MyTrips
