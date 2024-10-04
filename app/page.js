"use client"
import Image from "next/image";
import Hero from "./_components/Hero";
import SearchBar from "./_components/SearchBar";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      <Hero/>
      <SearchBar/>
      <DoctorList doctorList={doctorList}/>

    </div>
  );
}
