"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetail from "../_components/DoctorDetail";

function Details({ params }) {
   const [doctors, setDoctors] = useState([]); // Store the full list of doctors
  const [doctor, setDoctor] = useState(null); // Null to handle loading
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then((resp) => {
      // console.log(resp.data.data);
      // setDoctor(resp.data.data);
      // setLoading(false); // Data fetched, stop loading
      const allDoctors = resp.data.data;
      setDoctors(allDoctors); // Store all doctors
      findDoctorById(allDoctors); // Find the doctor by ID
      setLoading(false);
    });
  };

  const findDoctorById = (doctorsArray) => {
    const doctorId = parseInt(params.recordId); // Ensure ID is a number
    console.log("doctorId: " + doctorId);
    const foundDoctor = doctorsArray.find((doc) => doc.id === doctorId); // Find doctor by ID
    console.log("foundDoctor: " );
    console.log(foundDoctor);
    setDoctor(foundDoctor); // Store the found doctor in state
  };

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          {loading ? (
            <p>Loading...</p> // Display loading message
          ) : (
            doctor && <DoctorDetail doctor={doctor} />
          )}
        </div>
        {/* Doctor suggestion */}
        <div>{/* You can add suggestions here */}</div>
      </div>
    </div>
  );
}

export default Details;
