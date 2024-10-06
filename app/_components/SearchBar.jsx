"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

function SearchBar() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
    // cleanup function
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="mb-10 items-center flex flex-col gap-2 px-5">
      <h2 className="font-bold text-4xl tracking-wide">
        Search<span className="text-primary"> Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointments in one click
      </h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {/* Display list of category */}

      <div className="gap-2 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
        {categoryList.length>0?categoryList.map((item, index) => index<6&&(
          <Link href={'/search/'+item.Name} key={index} className="flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer shadow-md shadow-stone-400">
            <Image
              src={item.Icon?.[0]?.url}
              alt="icon"
              width={40}
              height={40}
            />
            <label className="text-blue-600 text-sm">{item.Name}</label>
          </Link>
        )):
        [1,2,3,4,5,6].map((item,index)=>(
          <div className="h-[130px] w-[120px] bg-slate-200 animate-pulse rounded-lg" key={index}></div>
        ))
        
        }
      </div>
    </div>
  );
}

export default SearchBar;
 