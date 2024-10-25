import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

function BookingList({ bookingList }) {
  return (
    <div>
      {bookingList &&
        bookingList.map((item, index) => (
          <div>
            {/* [1].doctor.image[0].url */}
            <Image
              src={item.doctor.image[0]?.url}
              width={70}
              height={70}
              alt="doctor-image"
              className="rounded-full object-cover h-[70px] w-[70px]"
            />
            <div>
              <h2 className="">{item.doctor.Name}</h2>
              <h2>{item.doctor.Address}</h2>
              <h2>
                <Calendar/> Appointment On {item.Date}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookingList;
