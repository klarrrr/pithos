"use client";

import { useState } from "react"
import { Search } from "@deemlol/next-icons";
import { Button } from "./ui/button";

const NavSearchBar = () => {
    // TODO: the searchContent contains the text that needs to be searched.
    const [searchContent, setSearchContent] = useState("");
    const exampleSearchFunction = (data: string) => {
        alert("Kunyare searching: " + data);
    }

    return (

    <div className="overflow-hidden rounded-md w-full lg:w-[512px] flex items-center h-full justify-center">
        <input placeholder="Search for an asset" className="rounded-md rounded-r-none text-sm border-muted border-r-0 focus:outline-none h-full w-full px-5 bg-popover text-primary hover:scale-103 focus:border-foreground" type="text" onChange={(e)=>{setSearchContent(e.currentTarget.value)}} onKeyDown={(e)=>{
            // TODO: Put function of the SEARCH here inside the if expression.
            if(e.key == 'Enter') exampleSearchFunction(searchContent);
        }}/>
        <Button variant={"red_default"} className="rounded-l-none h-full" onClick={()=>{exampleSearchFunction(searchContent)}}>
            <Search width={16} height={24}/>
        </Button>

    </div>
  )
}

export default NavSearchBar
