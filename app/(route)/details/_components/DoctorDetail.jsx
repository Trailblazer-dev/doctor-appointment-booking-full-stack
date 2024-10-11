import Image from 'next/image'
import React from 'react'

function DoctorDetail({doctor}) {
  return (
        <div className=" grid grid-cols-1 md:grid-cols-3">
          {/* Doctor Image */}
          <div className="col-span-1">
              <Image src={doctor?.Image?.[0]?.url} width={200} height={200} alt='doctor image'
              className="rounded-lg w-full h-[270px] object-cover"/>
          </div>
          {/* Doctor Information */}
          <div className="col-span-2">

          </div>

        </div> 
  )
}

export default DoctorDetail