import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function BookingList({ bookingList, expired, updateRecord,setBookingList }) {
  // const OnDeleteBooking = (item) => {
  //   // console.log(item);
  //    const adjustedId = item.id-1;
  //   GlobalApi.deleteBooking(adjustedId).then(resp=>{
  //     console.log("onDeleteBooking")
  //     console.log(resp);
  //     if(resp){
  //       toast('Booking deleted successfully!');
  //       updateRecord()
  //     }
  //   })

  // }
  const OnDeleteBooking = (item) => {
    const adjustedId = item.id-1; // Adjust the ID if necessary for matching

    GlobalApi.deleteBooking(adjustedId)
      .then((resp) => {
        if (resp) {
          toast("Booking deleted successfully!");
          setBookingList((prevList) =>
            prevList.filter((booking) => booking.id !==adjustedId)
          );
          updateRecord(); // Also triggers the re-fetch for confirmation
        }
      })
      .catch((err) => {
        console.error("Error deleting booking:", err);
        toast("Failed to delete booking!");
      });
  };

  return (
    <div>
      {bookingList &&
        bookingList.map((item, index) => (
          <div className="flex gap-4 items-center border p-5 m-3 rounded-lg">
            {/* [1].doctor.image[0].url */}
            <Image
              src={item.doctor.image[0]?.url}
              width={70}
              height={70}
              alt="doctor-image"
              className="rounded-full object-cover h-[70px] w-[70px]"
            />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-bold text-[18px] flex justify-between items-center">
                {item.doctor.Name}
                {!expired && (
                  <CancelAppointment
                    onContinueClick={() => OnDeleteBooking(item)}
                  />
                )}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                {" "}
                <MapPin className="text-primary h-5 w-5" />
                {item.doctor.Address}
              </h2>
              <h2 className="flex gap-2 ">
                <Calendar className="text-primary h-5 w-5" /> Appointment On:{" "}
                {moment(item.Date).format("DD-MM-YYYY")}
              </h2>
              <h2 className="flex gap-2 ">
                <Clock className="text-primary h-5 w-5" /> At Time:
                {item.Time}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookingList;
