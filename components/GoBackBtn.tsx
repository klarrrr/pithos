import React from 'react'
import { ArrowLeft } from "@deemlol/next-icons";

const GoBackBtn = () => {
  return (
    <button className='text-[#C1121F] bg-transparent self-start flex items-center gap-2 text-lg'>
        <ArrowLeft size={16} />
        Go Back
    </button>
  )
}

export default GoBackBtn
