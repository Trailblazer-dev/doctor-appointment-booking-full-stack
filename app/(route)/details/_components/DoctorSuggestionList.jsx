import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function DoctorSuggestionList() {
    const [doctorList,setDoctorList]=useState([]);

  useEffect(()=>{
    getDoctorList();
  },[])

  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div className='p-4 border-[1px] mt-5 md:ml-5'>
        <h2 className='mb-3 font-bold'>Suggestions</h2>
        
        {doctorList.map((doctor,index)=>(
          <Link href={'/details/'+ doctor?.id} className="w-full">
            <div className='mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex items-center gap-3'>
                <Image
                // [1].Image.url [0].image[0].url
                  src={doctor.image[0]?.url}
                  alt="doctor"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] object-cover rounded-full"
                />
                <div className='mt-3 flex flex-col items-baseline'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                        {doctor.categories?.[0]?.Name}
                    </h2>
                    <h2 className='font-medium text-sm '>
                      {doctor.Name}
                    </h2>
                    <h2 className='text-primary text-xs'>
                      {doctor.Year_of_Experience}
                    </h2>
                </div>
            </div>
            </Link>
        ))}
        
    </div>
  )
}

export default DoctorSuggestionList