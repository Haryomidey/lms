import React from 'react'

import { FaBook } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { HiBeaker } from "react-icons/hi";


const DashboardBody = () => {
    return (
        <section className='w-full h-[calc(100vh-80px)] pt-5 px-5'>
            <ul className='w-full grid grid-cols-6 gap-6'>
                <div className='bg-secondary p-5 h-[170px] shadow-md flex flex-col items-center gap-2'>
                    <div className='bg-main h-16 w-16 rounded-full grid place-items-center text-white text-3xl'>
                        <FaBook />
                    </div>
                    <p>Subjects</p>
                    <p className='font-semibold'>16</p>
                </div>
                <div className='bg-secondary p-5 h-[170px] shadow-md flex flex-col items-center gap-2'>
                    <div className='bg-main h-16 w-16 rounded-full grid place-items-center text-white text-3xl'>
                        <MdAssignment />
                    </div>
                    <p>Assignments</p>
                    <p className='font-semibold'>10</p>
                </div>
                <div className='bg-secondary p-5 h-[170px] shadow-md flex flex-col items-center gap-2'>
                    <div className='bg-main h-16 w-16 rounded-full grid place-items-center text-white text-3xl'>
                        <HiBeaker />
                    </div>
                    <p>Practicals</p>
                    <p className='font-semibold'>6</p>
                </div>
                <div className='col-span-3 bg-secondary p-5 h-[170px] shadow-md'>
                    <h2 className='font-semibold'>Annoucement</h2>

                    <div className='mt-5 flex flex-col gap-4'>
                        <div className='w-full flex items-center gap-2 border-b pb-4'>
                            <p className='w-2 h-2 rounded-full bg-[#F5C451]'></p>
                            <p>Founder's day</p>
                        </div>
                        <div className='w-full flex items-center gap-2'>
                            <p className='w-2 h-2 rounded-full bg-[#4E0D76]'></p>
                            <p>Inter school sport</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-3 bg-secondary p-5 h-[170px] shadow-md'>
                    
                </div>
                <div className='col-span-3 bg-secondary p-5 h-[170px] shadow-md'>

                </div>
            </ul>
        </section>
    )
}

export default DashboardBody
