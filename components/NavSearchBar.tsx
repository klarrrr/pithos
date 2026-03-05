"use client";

import { useState } from "react"
import { Search } from "@deemlol/next-icons";

const NavSearchBar = () => {
    // TODO: the searchContent contains the text that needs to be searched.
    const [searchContent, setSearchContent] = useState("");
    const exampleSearchFunction = (data: string) => {
        alert("Kunyare searching: " + data);
    }

    return (

    <div className=" overflow-hidden rounded-md w-[512px] flex items-center">
        <input placeholder="Search for an asset" className="focus:outline-none p-1.5 w-full px-5 bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]" type="text" onChange={(e)=>{setSearchContent(e.currentTarget.value)}} onKeyDown={(e)=>{
            // TODO: Put function of the SEARCH here inside the if expression.
            if(e.key == 'Enter') exampleSearchFunction(searchContent);
        }}/>
        <button className="bg-[#E11D48] p-1 text-white hover:bg-[#FF4D4D]" onClick={()=>{exampleSearchFunction(searchContent)}}><Search width={32} height={24}/></button>
    </div>
  )
}

export default NavSearchBar
