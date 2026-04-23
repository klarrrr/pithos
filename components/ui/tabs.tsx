"use client";

import { JSX } from 'react'
import { useState } from 'react';

const Tabs = ({ items }: { items: Array<JSX.Element> }) => {
    
    // Use States
    const [activeTab, setActiveTab] = useState(1); 

    // Rendering Function

    const renderItems = () => {
        return items.map((item, index)=>renderItem(item, index));
    }

    const renderItem = (item : JSX.Element, index : number) => {
        console.log(index);
        return <div className={`${activeTab === index+1 ? 'flex' : 'hidden'}`} key={index}>{item}</div>
    }

    return (
        // Tabs

        <div className='flex flex-col gap-4'>
            <div className='flex w-full gap-8 font-medium text-lg *:pb-4 bo border-b'>
                <button onClick={()=>setActiveTab(1)} className={`hover:border-b-chart-5 hover:border-b-2 hover:text-chart-5 ${activeTab === 1 ? 'border-b-accent border-b-2 text-accent' : 'text-muted-foreground'} transition duration-300 ease-in-out `} >Transactions</button>
                <button onClick={()=>setActiveTab(2)} className={`hover:border-b-chart-5 hover:border-b-2 hover:text-chart-5 ${activeTab === 2 ? 'border-b-accent border-b-2 text-accent' : 'text-muted-foreground'} transition duration-300 ease-in-out `} >Given Ratings</button>
            </div>
            {renderItems()}
        </div>
    )
}

export default Tabs
